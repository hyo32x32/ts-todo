import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 10px;
  border: 2px solid;
  border-color: #638351;
  padding: 0 5px;
`;

const Btn = styled.button`
  margin-left: 3px;
  border-radius: 5px;
  border: 2px solid;
  background-color: #7a9c64;
  border-color: #7a9c64;
  cursor: pointer;
`;

interface IForm {
  toDo: string;
}
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <br />
      <Input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <Btn>Add</Btn>
    </form>
  );
}

export default CreateToDo;
