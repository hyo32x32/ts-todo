import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryState,
  toDoSelector,
  newCategoryState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";
import CreateCategory from "./CreateCategory";

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

const Cate = styled.div`
  margin: 0 50px;
  text-align: left;
`;

const Select = styled.select`
  border-radius: 20px;
  border-color: rgb(94, 145, 145);
  border-width: 2px;
  padding: 0px 10px;
  margin-right: 20px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const newCategory = useRecoilValue(newCategoryState);
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
      <Cate>
        <Select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
          {newCategory?.map((cate) => (
            <option value={cate.newCate}>{cate.newCate}</option>
          ))}
        </Select>
      </Cate>
      <CreateToDo />
      <br />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <div>
        <CreateCategory />
      </div>
    </Wrapper>
  );
}
export default ToDoList;
