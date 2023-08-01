// mock considering backend just scraps items and returns them
// const badDb: TDB = {
//   itemsFound: 10,
//   itemsProcessed: 9,
//   items: [
//     {
//       name: "Rappi.",
//       price: 28600,
//       date: "2023-06-20",
//     },
//     {
//       name: "Rappi.",
//       price: 21200,
//       date: "2023-06-20",
//     },
//     {
//       name: "Rappi.",
//       price: 29900,
//       date: "2023-06-20",
//     },
//     {
//       name: "RAPPI SUPERMERCADOS.",
//       price: 16904,
//       date: "2023-06-20",
//     },
//     {
//       name: "UBER*RIDES*DL",
//       price: 15100,
//       date: "2023-06-20",
//     },
//     {
//       name: "UBER*RIDES*DL",
//       price: 22900,
//       date: "2023-06-20",
//     },
//     {
//       name: "UBER *TRIP",
//       price: 22900,
//       date: "2023-06-20",
//     },
//     {
//       name: "NETFLIX01*DL",
//       price: 22900,
//       date: "2023-06-20",
//     },
//     {
//       name: "MERCADOPAGO CABIFY",
//       price: 22900,
//       date: "2023-06-20",
//     },
//   ],
// };

import { TResponse } from "./types/results";

const db: TResponse = {
  itemsFound: 10,
  itemsProcessed: 9,
  label: "Rice",
  data: [
    {
      name: "RAPPI",
      price: 28600,
      date: "2023-06-20",
    },
    {
      name: "RAPPI",
      price: 21200,
      date: "2023-06-20",
    },
    {
      name: "RAPPI",
      price: 29900,
      date: "2023-06-20",
    },
    {
      name: "ENEL",
      price: 16904,
      date: "2023-06-20",
    },
    {
      name: "UBER",
      price: 15100,
      date: "2023-06-20",
    },
    {
      name: "UBER",
      price: 22900,
      date: "2023-06-20",
    },
    {
      name: "UBER",
      price: 22900,
      date: "2023-06-20",
    },
    {
      name: "NETFLIX",
      price: 22900,
      date: "2023-06-20",
    },
    {
      name: "CABIFY",
      price: 22900,
      date: "2023-06-20",
    },
  ],
};

export const MockBoxItem = Promise.resolve(db);
