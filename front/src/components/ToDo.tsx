import React from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const ToDoList = styled.li`
  margin-bottom: 5px;
  list-style-type: none;
`;

const Pen = styled.span`
  margin-left: 3px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => props.theme.accentColor};
  cursor: pointer;
`;

const ToDoText = styled.span`
  margin: 0 7px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
`;

const Btn = styled.button`
  margin-left: 3px;
  border-radius: 5px;
  border: 2px solid;
  background-color: #7a9c64;
  border-color: #7a9c64;
  cursor: pointer;
`;

const Del = styled.span`
  margin-left: 3px;
  border-radius: 20px;
  padding: 0 3px;
  border: 2px solid;
  background-color: #7a9c64;
  border-color: #7a9c64;
  cursor: pointer;
`;

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
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
  const onDelete = () => {
    setToDos((toDos) => toDos.filter((todo) => todo.id !== id));
  };

  return (
    <ToDoList>
      <Pen>✎</Pen>
      <ToDoText>{text}</ToDoText>
      {category !== Categories.DOING && (
        <Btn name={Categories.DOING} onClick={onClick}>
          Doing
        </Btn>
      )}
      {category !== Categories.TO_DO && (
        <Btn name={Categories.TO_DO} onClick={onClick}>
          To Do
        </Btn>
      )}
      {category !== Categories.DONE && (
        <Btn name={Categories.DONE} onClick={onClick}>
          Done
        </Btn>
      )}
      <Del onClick={onDelete}>𝐱</Del>
    </ToDoList>
  );
}
export default ToDo;
