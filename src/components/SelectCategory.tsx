import { categories } from "../atom";

interface ISelectProps {
  onInput: (event: React.FormEvent<HTMLSelectElement>) => void;
  categorValue: string;
}

function SelectCategory({ onInput, categorValue }: ISelectProps) {
  return (
    <select value={categorValue} onInput={onInput}>
      <option value={categories.TODO}>To Do</option>
      <option value={categories.DOING}>Doing</option>
      <option value={categories.DONE}>Done</option>
    </select>
  );
}

export default SelectCategory;
