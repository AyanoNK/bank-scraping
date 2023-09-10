import Bar from '@/components/Graph/Bar';
import { InsightsContext } from '@/providers/InsightsContext';

import { useContext } from 'react';

export default function Analysis() {
  const { insights, setInsights } = useContext(InsightsContext);
  const handleResetInsights = () => setInsights(undefined);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <span className="text-xl font-bold text-left">Analysis</span>
      <div className="w-full" style={{ height: '30rem' }}>
        {insights && <Bar barData={insights?.agg} />}
      </div>
      <button
        className="px-4 py-2 font-medium text-md bg-secondary text-text rounded-md shadow-sm ease-in-out duration-300 hover:bg-primary hover:text-white hover:scale-110"
        onClick={handleResetInsights}
      >
        Upload another file
      </button>
    </div>
  );
}
