import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atom";



function ToDo({ text,category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClick =(event:React.MouseEvent<HTMLButtonElement>) => {
      const {currentTarget:{name}} = event;
      setToDos(oldToDos => {
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)

        const newToDo = {text, id, category:name as any}
        return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)

        ]})
       
  }
  return (
    <li>
      {text} {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>} 
      {category !== "TODO" && <button name="TODO" onClick={onClick}>To Do</button>} 
      {category !== "DONE" && <button name="DONE" onClick={onClick}>DONE</button>} 
    </li>
  );
}

export default ToDo;
