type TResponse = {
  itemsFound: number;
  itemsProcessed: number;
  totals: Item[];
  items: Item[];
};

type InsightsContextType = {
  insights: TResponse | undefined;
  setInsights: React.Dispatch<React.SetStateAction<TResponse | undefined>>;
};
