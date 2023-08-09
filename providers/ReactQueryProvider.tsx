'use client';

import { QueryClient, QueryClientProvider } from 'react-query';
import { cache, useState } from 'react';

type TProviders = { children: React.ReactNode };

export default function ReactQueryProvider({ children }: TProviders) {
  const [queryClient] = useState(cache(() => new QueryClient()));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
