'use client';

import { TResponse } from '@/types/results';
import { useState } from 'react';
import FileUploadInput from '@/components/FileUpload/FileUploadInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import fileFormSchema from '@/schemas/fileFormSchema';
import useSendFileToReview from '@/hooks/useSendFileToReview';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import clsx from 'clsx';

type FormValues = {
  type: string;
};

export default function FileForm() {
  const [bankFile, setBankFile] = useState<File | null>(null);
  const [extracts, setExtract] = useState<TResponse | undefined>();
  const { mutate, isLoading, isError } = useSendFileToReview();
  const { handleSubmit, register, setValue, formState } = useForm({
    resolver: yupResolver(fileFormSchema),
  });
  const validSubmit = bankFile !== null || !isLoading || formState.isValid;

  const getBase64 = (file: File) => {
    let baseURL = '';
    // Make new FileReader
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      if (typeof reader.result === 'string') baseURL = reader.result;
    };
    return baseURL;
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const values = {
      ...data,
      file: getBase64(bankFile as File),
    };
    mutate(values);
  };

  return (
    <ReactQueryProvider>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <FileUploadInput
            file={bankFile}
            handleFile={setBankFile}
            acceptedExtensions={['text/plain']}
          />
          <label htmlFor="type">Type of file</label>
          <div className="flex flex-row gap-2 w-full items-center justify-center flex-wrap">
            <button
              type="button"
              onClick={() => {
                console.log('AAAA');
                setValue('type', 'credit');
              }}
              className="px-4 py-2 rounded-md border border-secondary"
              {...register('type')}
            >
              Credit
            </button>
            <button
              type="button"
              onClick={() => {
                console.log('AAAA');
                setValue('type', 'debit');
              }}
              className="px-4 py-2 rounded-md border border-secondary"
              {...register('type')}
            >
              Debit
            </button>
          </div>
        </div>
      </form>
      <button
        type="submit"
        className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110"
      >
        Get my insights!
      </button>
    </ReactQueryProvider>
  );
}
