import { useSetRecoilState } from "recoil";
import { categories, IToDo, toDoState } from "../atom";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteToDo = () => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      {text}
      {category !== categories.DOING && (
        <button name={categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== categories.TODO && (
        <button name={categories.TODO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== categories.DONE && (
        <button name={categories.DONE} onClick={onClick}>
          DONE
        </button>
      )}
      <button onClick={deleteToDo}>삭제</button>
    </li>
  );
}

export default ToDo;
