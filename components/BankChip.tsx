interface TBankChip {
  name: string;
}

export default function BankChip({ name }: TBankChip) {
  return (
    <span className="px-4 py-2 font-medium text-md border border-secondary text-text rounded-md shadow-sm hover:-translate-y-1 hover:bg-secondary ease-in-out duration-300  select-none">
      {name}
    </span>
  );
}
