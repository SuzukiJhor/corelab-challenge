import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useListTasksContext from "../../hooks/useListTasksContext";
import { SaveButtonTask } from "../createTask/SaveButton";
import { BodyInputTask } from "../createTask/BodyInput";
import { usePostRequest } from "../../hooks/useRequestPost";
import { TitleWrapperInput } from "./TitleWrapperInput";

const TaskModal = styled.div`
  @media (min-width: 414px) {
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
  }

  @media (max-width: 414px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    border: none;
    width: 530px;
    border-radius: 5px;
  }
`;

const Form = styled.form`
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    border: none;
  }
`;

const tasksSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type TasksSchema = z.infer<typeof tasksSchema>;

const CreateTask = () => {
  const isFavorite = false;
  const { register, handleSubmit, reset, form } = useForm<TasksSchema>({
    resolver: zodResolver(tasksSchema),
  });

  const { data, setTaskData } = useListTasksContext();

  const { sendPostRequest } = usePostRequest(
    "http://localhost:8000/api/tasks?",
  );

  const [isFormFocused, setIsFormFocused] = useState(false);

  const handleFormFocus = () => {
    setIsFormFocused(true);
  };

  const handleFormBlur = () => {
    setIsFormFocused(false);
  };

  const handleCreateTask = async (data: TasksSchema) => {
    if (data) data.is_favorite = "false";

    try {
      await sendPostRequest(data);
      setTaskData((prevData) => [...prevData, data]);
      setIsFormFocused(false);
      reset();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  const taskId = 1;

  const handleFavorite = () => {
    console.log("favoritos");
  };

  return (
    <TaskModal>
      <Form onSubmit={handleSubmit(handleCreateTask)} onFocus={handleFormFocus}>
        <TitleWrapperInput
          register={register}
          handleFavorite={() => {
            handleFavorite();
          }}
          favorite={taskId}
          placeholder="Título"
          register={register}
        />

        <BodyInputTask
          placeholder="Criar nota..."
          rows={4}
          wrap="soft"
          register={register}
          defaultValue=""
        />
        <SaveButtonTask show={isFormFocused.toString()} />
      </Form>
    </TaskModal>
  );
};

export default CreateTask;
