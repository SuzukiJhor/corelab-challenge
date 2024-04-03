import styled from "styled-components";
import { IconStar } from "./icons/IconStar";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostRequest } from "../hooks/useRequestPost";

const TaskModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 390px;
  height: 110px;
  margin-top: 25px;
  padding-bottom: 10px;

  background: #ffffff;

  box-shadow: 1px 1px 3px 0px #00000040;
  border: 1px solid #d9d9d9;
  border-radius: 25px;

  @media (max-width: 414px) {
    width: 280px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 25px 0 25px;
  margin-top: 5px;

  border-bottom: 1px solid #d9d9d9;
`;

const TitleInput = styled.input`
  display: flex;
  text-align: left;

  width: 100%;
  padding-right: 15vw;
  height: 35px;

  text-color: #333333;
  font-size: 14.2px;
  font-weight: 700;
  line-height: 17.19px;
  outline: none;
  border: none;

  ::placeholder {
    font-size: 14.2px;
    font-weight: 700;
    line-height: 17.19px;
    text-align: left;
    text-color: #333333;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
`;

const BodyInput = styled.textarea`
  width: 95%;
  height: 60px;
  font:
    14.2px/1.5 "Inter",
    sans-serif;
  color: #333333;
  border: none;
  border-radius: 25px;
  padding: 5px 0 0 25px;
  outline: none;
  table-layout: auto;
  maring: 10px;
`;

const SaveButton = styled.button`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.active ? "#00FF00" : "#e5f8e5")};
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  box-shadow: 1px 1px 3px 0px #00000040;
  margin: 3% 0 5% 15%;
  padding-bottom: 5px;

  visibility: ${(props) => (props.show === "true" ? "visible" : "hidden")};

  &:hover {
    background-color: ${(props) => (props.active ? "#00CC00" : "#d4f7d4")};
  }

  &:active {
    background-color: ${(props) => (props.active ? "#009900" : "#d4f7d4")};
  }
`;

const tasksSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type TasksSchema = z.infer<typeof tasksSchema>;

export const CreateTask = () => {
  const { data, sendPostRequest } = usePostRequest(
    "http://localhost:8000/api/tasks?",
  );
  const { register, handleSubmit, reset } = useForm<TasksSchema>({
    resolver: zodResolver(tasksSchema),
  });

  const [isFormFocused, setIsFormFocused] = useState(false);

  const handleFormFocus = () => {
    setIsFormFocused(true);
  };

  const handleFormBlur = () => {
    setIsFormFocused(false);
  };

  const handleCreateTask = (data: TasksSchema) => {
    console.log(data);
    sendPostRequest(data);
    setIsFormFocused(false);
    reset();
  };

  return (
    <TaskModal>
      <Form onSubmit={handleSubmit(handleCreateTask)} onFocus={handleFormFocus}>
        <TitleWrapper>
          <TitleInput placeholder="Título" {...register("title")} />
          <IconStar />
        </TitleWrapper>
        <BodyInput
          placeholder="Criar nota..."
          rows={4}
          wrap="soft"
          {...register("description")}
        />
        <div>
          <SaveButton type="submit" show={isFormFocused.toString()}>
            Salvar
          </SaveButton>
        </div>
      </Form>
    </TaskModal>
  );
};
