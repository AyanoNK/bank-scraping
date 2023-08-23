'use client';

import { useContext, useEffect, useState } from 'react';
import FileUploadInput from '@/components/FileUpload/FileUploadInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import fileFormSchema from '@/schemas/fileFormSchema';
import useInsightCreditExtract from '@/hooks/useInsightCreditExtract';
import fileToBase64 from '@/providers/fileToBase64';
import { InsightsContext } from '@/providers/InsightsContext';

export default function FileForm() {
  const insightsProvider = useContext(InsightsContext);

  const [bankFile, setBankFile] = useState<File | null>(null);
  const { mutate, isLoading, isError, data } = useInsightCreditExtract();

  const onSubmit = async () => {
    const base64String = await fileToBase64(bankFile as File);
    const values = {
      ...data,
      b64string: base64String,
    };
    mutate(values);
  };

  useEffect(() => {
    if (data) {
      insightsProvider.setInsights(data as TResponse);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <FileUploadInput
        file={bankFile}
        handleFile={setBankFile}
        acceptedExtensions={['text/plain']}
      />

      <button
        type="submit"
        disabled={bankFile === null || isLoading}
        className={`px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110 ${
          isLoading && 'cursor-progress'
        }`}
        onClick={onSubmit}
      >
        Get my insights!
      </button>
    </div>
  );
}
