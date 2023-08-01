import { Item } from "@/types/item";
import { TResponse } from "@/types/results";
import React from "react";
import { AxisOptions, Chart, UserSerie } from "react-charts";

interface IInfo {
  extracts: TResponse;
}

export default function Bar({ extracts }: IInfo) {
  const filteredData = extracts.data.reduce((acc, curr) => {
    const { name, price, date } = curr;
    const found = acc.find((item) => item.name === name);
    if (found) {
      found.price += price;
    }
    if (!found) {
      acc.push({ name, price, date });
    }
    return acc;
  }, [] as Item[]);

  const data = [{ label: "Series 1", data: [...filteredData] }];

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: Item) => datum.name,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum: Item) => datum.price,
      },
    ],
    []
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
