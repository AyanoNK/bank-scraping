'use client';

import { TResponse } from '@/types/results';
import { useContext, useEffect, useState } from 'react';
import FileUploadInput from '@/components/FileUpload/FileUploadInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import fileFormSchema from '@/schemas/fileFormSchema';
import useSendFileToReview from '@/hooks/useSendFileToReview';
import fileToBase64 from '@/providers/fileToBase64';
import { InsightsContext } from '@/app/page';

type FormValues = {
  type: string;
};

export default function FileForm() {
  const insightsProvider = useContext(InsightsContext);

  const [bankFile, setBankFile] = useState<File | null>(null);
  const { mutate, isLoading, isError, data } = useSendFileToReview();
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(fileFormSchema),
    defaultValues: {
      type: 'credit',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const base64String = await fileToBase64(bankFile as File);
    const values = {
      ...data,
      file: base64String,
    };
    mutate(values);
  };

  useEffect(() => {
    if (data) {
      insightsProvider.setInsights(data as TResponse);
    }
  }, [data]);

  return (
    <form
      className="flex flex-col items-center justify-center gap-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <select
          {...register('type')}
          className="px-4 py-2 rounded-md bg-secondary"
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <FileUploadInput
          file={bankFile}
          handleFile={setBankFile}
          acceptedExtensions={['text/plain']}
        />
      </div>

      <button
        type="submit"
        disabled={bankFile === null || isLoading}
        className={`px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110 ${
          isLoading && 'cursor-progress'
        }`}
      >
        Get my insights!
      </button>
    </form>
  );
}
