import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { newCategoryState } from "../atoms";
import styled from "styled-components";

const CateForm = styled.form`
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1.5px solid #90a0e09a;
`;

const CategoryBtn = styled.button`
  margin-left: 3px;
  border-radius: 5px;
  border: 2px solid;
  background-color: #7dc74b;
  border-color: #93d964;
  cursor: pointer;
`;

const Input = styled.input`
  border-radius: 10px;
  border: 2px solid;
  border-color: #78d244;
  padding: 0 5px;
`;

interface ICategory {
  newCategory: string;
}

function CreateCategory() {
  const setNewCategory = useSetRecoilState(newCategoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();
  const handleValid = ({ newCategory }: ICategory) => {
    setNewCategory((cate) => [{ new: newCategory, id: Date.now() }, ...cate]);
    setValue("newCategory", "");
  };
  return (
    <CateForm onSubmit={handleSubmit(handleValid)}>
      {" "}
      <Input {...register("newCategory")} placeholder="Write a Category" />
      <CategoryBtn>Add</CategoryBtn>
    </CateForm>
  );
}

export default CreateCategory;
