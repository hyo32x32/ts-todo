import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 400px;
  min-height: 400px;
  border-radius: 35px;
  box-shadow: 3px 3px 14px 10px rgba(0, 0, 0, 0.2);
`;

const Ti = styled.div`
  margin-top: 5px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  padding-top: 10px;
  text-align: center;
  align-content: center;
  color: ${(props) => props.theme.accentColor};
`;

const Select = styled.select`
  border-radius: 20px;
  border-color: rgb(94, 145, 145);
  border-width: 2px;
  padding: 0px 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  console.log(toDos);

  return (
    <Wrapper>
      <Ti>
        {" "}
        <Title>To Dos🗓</Title>
        <hr />
      </Ti>

      <Select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </Select>

      <CreateToDo />
      <br />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Wrapper>
  );
}
export default ToDoList;
