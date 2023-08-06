'use client';

import { MockBoxItem } from '@/mock';
import { TResponse } from '@/types/results';
import {
  BaseSyntheticEvent,
  SyntheticEvent,
  createRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import BankChip from '@/components/BankChip';
import DatePicker from '@/components/DatePicker';

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
  const [extracts, setExtract] = useState<TResponse | undefined>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  console.log(startDate);

  const fetchData = async () => {
    const response = await MockBoxItem;
    console.log(response);
    setExtract(response);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-24 container">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
        <h2 className="text-2xl text-center md:text-left">
          Upload your bank extracts and get key information about your invoices.
        </h2>
        <div className="flex flex-col gap-5 items-center justify-center">
          <h3 className="text-xl font-medium text-center">Supported banks</h3>
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            {availableBanks.map((bank: string) => (
              <BankChip key={bank} name={bank} />
            ))}
            <BankChip name="More to come!" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="col-span-2 w-full h-28 flex items-center justify-center bg-secondary mb-4 rounded-md hover:opacity-80 ease-in-out duration-300">
          <span className="text-lg">Drop your file here</span>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 w-full">
          <DatePicker onChange={handleSetStartDate} />
          <DatePicker onChange={handleEndDate} />
        </div>
        <span className="col-span-2 text-sm">
          Please use the calendar selector as the written input is still in
          progress.
        </span>
      </div>

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
