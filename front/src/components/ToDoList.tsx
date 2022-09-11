import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  margin-top: 15px;
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
      <Title>To Dos🗓</Title>
      <hr />
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
