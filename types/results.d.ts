import { Item } from './item';

export type TResponse = {
  itemsFound: number;
  itemsProcessed: number;
  label: string;
  data: Item[];
};

type InsightsContextType = {
  insights: TResponse | undefined;
  setInsights: React.Dispatch<React.SetStateAction<TResponse | undefined>>;
};
