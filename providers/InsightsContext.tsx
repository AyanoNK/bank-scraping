'use client';

import { InsightsContextType } from '@/types/results';
import { createContext } from 'react';

export const InsightsContext = createContext<InsightsContextType>(
  {} as InsightsContextType,
);
