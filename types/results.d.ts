type TResponse = {
  parsed: Item[];
  agg: Item[];
};

type InsightsContextType = {
  insights: TResponse | undefined;
  setInsights: React.Dispatch<React.SetStateAction<TResponse | undefined>>;
};
