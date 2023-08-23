'use client';

import BankChip from '@/components/BankChip';
import FileForm from '@/forms/FileForm/FileForm';
import { mockResponse } from '@/mock';
import { InsightsContext } from '@/providers/InsightsContext';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { useEffect, useState } from 'react';
import Analysis from '@/modules/analysis';

const availableBanks = ['Davivienda'];

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
          {/* <button className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110 hidden">
          This is the worst practice I have ever done throughout my whole career
        </button> */}
          {insights ? <Analysis /> : <FileForm />}
        </div>
      </ReactQueryProvider>
    </InsightsContext.Provider>
  );
}
