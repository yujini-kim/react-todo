import { useRecoilState, useRecoilValue } from "recoil";
import { categories, categoryState, toDoSelector, toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import SelectCategory from "./SelectCategory";
import { useEffect } from "react";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <SelectCategory categorValue={category} onInput={onInput} />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
