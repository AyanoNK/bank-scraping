'use client';

import { MockBoxItem } from '@/mock';
import { TResponse } from '@/types/results';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import BankChip from '@/components/BankChip';
import DatePicker from '@/components/DatePicker';
import FileUploadInput from '@/components/FileUpload/FileUploadInput';
import api from '@/providers/api';

const questions = [
  'What variables will be returned from the API?',
  'Will you give me totals for each item or do I calculate it in the front end?',
];

const availableBanks = [
  'Davivienda',
  'Colpatria',
  'Bancolombia',
  'Bancoomeva',
  'Pichincha',
];

export default function FileForm() {
  const [bankFile, setBankFile] = useState<File | null>(null);
  const [extracts, setExtract] = useState<TResponse | undefined>();

  const getDataFromBankFile = async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_HOST;
    console.log(url);
    if (url) {
      // TODO: implement React Query
      const { data } = await api.post(url, {
        method: 'POST',
      });
      if (data) console.log(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full">
      <FileUploadInput
        file={bankFile}
        handleFile={setBankFile}
        acceptedExtensions={['text/plain']}
      />
      <button
        className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm hover:scale-110 hover:bg-primary ease-in-out duration-300 hover:text-white"
        onClick={getDataFromBankFile}
      >
        Get my insights!
      </button>
    </div>
  );
}
