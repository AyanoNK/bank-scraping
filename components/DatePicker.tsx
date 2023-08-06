import { BaseSyntheticEvent } from 'react';

interface TDatePicker {
  onChange(e: BaseSyntheticEvent): void;
}

export default function DatePicker({ onChange, ...rest }: TDatePicker) {
  // I very well know that using input is really bad. No need to repeat it. Thank you.
  return (
    <input
      type="date"
      onChange={onChange}
      className="border-secondary rounded-md border-2 px-3 py-2 focus:border-accent focus:outline-none w-full"
      onFocus={(e) => (e.target.type = 'date')}
    />
  );
}
