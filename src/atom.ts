import { atom, selector } from "recoil";

export enum categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  category: categories;
}

export const categoryState = atom<categories>({
  key: "category",
  default: categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem("toDo") || "[]"),
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((todo) => todo.category === category);
  },
});
