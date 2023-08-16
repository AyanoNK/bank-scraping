import useDemoConfig from '@/hooks/useDemoConfig';
import React from 'react';
import { AxisOptions, Chart } from 'react-charts';

export default function Bar() {
  const { data } = useDemoConfig({
    series: 3,
    dataType: 'ordinal',
  });
  console.log(data);

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
  >(
    () => [
      {
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
