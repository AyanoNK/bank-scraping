'use client';

import { TResponse } from '@/types/results';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import BankChip from '@/components/BankChip';
import FileUploadInput from '@/components/FileUpload/FileUploadInput';
import api from '@/providers/api';
import FileForm from '@/forms/FileForm';

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

export default function Home() {
  const [bankFile, setBankFile] = useState<File | null>(null);
  const [extracts, setExtract] = useState<TResponse | undefined>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isShowing, setIsShowing] = useState(false);

  const getDataFromBankFile = async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_HOST;
    console.log(url);
    if (url) {
      const { data, status } = await api
        .post(url, {
          method: 'POST',
        })
        .catch((err) => {
          return { data: undefined, status: err.response.status };
        });
      if (data !== undefined) console.log(data);
    }
  };

  const handleSetStartDate = (e: BaseSyntheticEvent) => {
    setStartDate(new Date(e.target.value.replace(/-/g, '/')));
  };
  const handleEndDate = (e: BaseSyntheticEvent) => {
    const newEndDate = new Date(e.target.value.replace(/-/g, '/'));
    if (newEndDate > startDate)
      setEndDate(new Date(e.target.value.replace(/-/g, '/')));
    else alert('End date must be greater than start date');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-12 container">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h3 className="text-xl font-medium text-center">Supported banks</h3>
        <div className="flex flex-row gap-2 flex-wrap justify-center">
          {availableBanks.map((bank: string) => (
            <BankChip key={bank} name={bank} />
          ))}
          <BankChip name="More to come!" />
        </div>
      </div>
      <FileForm />
      <span className="text-xl">PUTO EL QUE LO LEA</span>
      <div className="flex flex-col gap-2">
        {questions.map((question) => (
          <span key={question}>{question}</span>
        ))}
        <span>
          Any thoughts on deploying? Vercel has serverless functions now. Check
          them out{' '}
          <a
            href="https://youtu.be/WALOgcZICI8"
            className="underline text-blue-500"
            target="_blank"
          >
            here
          </a>
          .
        </span>
      </div>
    </div>
  );
}
