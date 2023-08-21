import { FILEFORM_CACHE_KEYS } from '@/forms/FileForm/FileForm.constants';
import api from '@/providers/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface Props {
  type: string;
  file: string;
}

const getInsightCreditExtract = async (requestData: Props | null) => {
  if (!requestData) return;
  const { data } = await api.post(`/credit`, requestData);
  return data;
};

const useInsightCreditExtract = () => {
  const queryClient = useQueryClient();

  return useMutation(getInsightCreditExtract, {
    onError: (error) => {
      let errorMessage = '';
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        errorMessage = `- ${error.response.data.message}`;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries([FILEFORM_CACHE_KEYS.newCreditFileForm]);
    },
  });
};

export default useInsightCreditExtract;
