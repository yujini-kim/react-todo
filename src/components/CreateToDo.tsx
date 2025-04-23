import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atom";
import { useEffect } from "react";
interface IForm {
  toDo: string;
}
function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
export default CreateToDo;
