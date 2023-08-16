// mock considering backend just scraps items and returns them

export const mockResponse: TResponse = {
  itemsFound: 10,
  itemsProcessed: 9,
  totals: [
    {
      name: 'RAPPI',
      price: 100000,
      month: 8,
      year: 2023,
    },
    {
      name: 'ENEL',
      price: 200000,
      month: 8,
      year: 2023,
    },
    {
      name: 'UBER',
      price: 981500,
      month: 9,
      year: 2023,
    },
    {
      name: 'CABIFY',
      price: 22900,
      month: 9,
      year: 2023,
    },
  ],
  items: [
    {
      name: 'RAPPI',
      price: 100000,
      month: 8,
      year: 2023,
    },
    {
      name: 'ENEL',
      price: 200000,
      month: 8,
      year: 2023,
    },
    {
      name: 'UBER',
      price: 981500,
      month: 9,
      year: 2023,
    },
    {
      name: 'CABIFY',
      price: 22900,
      month: 9,
      year: 2023,
    },
  ],
};

export const MockBoxItem = Promise.resolve(mockResponse);
