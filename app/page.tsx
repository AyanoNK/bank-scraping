'use client';

import BankChip from '@/components/BankChip';
import { InsightsContext } from '@/providers/InsightsContext';
import Link from 'next/link';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { useState } from 'react';

const availableBanks = ['Davivienda', 'Bancolombia'];

export default function Home() {
  const [insights, setInsights] = useState<TResponse | undefined>(undefined);

  return (
    <InsightsContext.Provider
      value={{
        insights,
        setInsights,
      }}
    >
      <ReactQueryProvider>
        <div className="flex flex-col items-center justify-center gap-y-12 container w-max">
          <div className="flex flex-col gap-5 items-center justify-center">
            <h3 className="text-xl font-medium text-center">Supported banks</h3>
            <div className="flex flex-row gap-2 flex-wrap justify-center">
              {availableBanks.map((bank: string) => (
                <BankChip key={bank} name={bank} />
              ))}
              <BankChip name="More to come!" />
            </div>
          </div>
          <h5 className="text-center text-lg">Choose your type of extracts</h5>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            {/* <Link
              href="/debit"
              className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110"
            >
              Debit
            </Link> */}
            <Link
              href="/credit"
              className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110"
            >
              Credit
            </Link>
          </div>
          {/* <button className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110 hidden">
          This is the worst practice I have ever done throughout my whole career
        </button> */}
        </div>
      </ReactQueryProvider>
    </InsightsContext.Provider>
  );
}
