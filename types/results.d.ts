import { Item } from "./item";

export type TResponse = {
  itemsFound: number;
  itemsProcessed: number;
  label: string;
  data: Item[];
};
