import useDemoConfig from '@/hooks/useDemoConfig';
import { mockResponse } from '@/mock';
import React from 'react';
import { AxisOptions, Chart } from 'react-charts';

export default function Bar() {
  const data = [
    {
      label: 'Main Series',
      data: [
        ...mockResponse.totals.map((total) => ({
          primary: total.name,
          secondary: total.price,
        })),
      ],
    },
  ];

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      position: 'left',
      getValue: (datum) => datum.primary,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
        position: 'bottom',
        getValue: (datum) => datum.secondary,
      },
    ],
    [],
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}
