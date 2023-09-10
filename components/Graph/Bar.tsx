// import useDemoConfig from '@/hooks/useDemoConfig';
// import React from 'react';
// import { AxisOptions, Chart } from 'react-charts';
import { ResponsivePie } from '@nivo/pie';

type TBar = {
  barData: Item[];
};

export default function Bar({ barData }: TBar) {
  // console.log(barData);

  const dData = barData.map((data) => ({
    id: data.type,
    label: data.type,
    value: data.amount,
  }));

  return (
    <div className="h-full w-full">
      <ResponsivePie
        data={dData}
        margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={4}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        valueFormat={'$,r'}
      />
    </div>
  );
}
