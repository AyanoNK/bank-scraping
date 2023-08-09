'use client';

import BankChip from '@/components/BankChip';
import FileForm from '@/forms/FileForm/FileForm';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

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
  return (
    <ReactQueryProvider>
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
            Any thoughts on deploying? Vercel has serverless functions now.
            Check them out{' '}
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
    </ReactQueryProvider>
  );
}
