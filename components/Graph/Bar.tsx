import useDemoConfig from '@/hooks/useDemoConfig';
import React from 'react';
import { AxisOptions, Chart } from 'react-charts';

type TBar = {
  barData: Item[];
};

export default function Bar({ barData }: TBar) {
  const data = [
    {
      label: 'Main Series',
      data: [
        ...barData.map((total) => ({
          primary: total.type,
          secondary: total.amount,
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
