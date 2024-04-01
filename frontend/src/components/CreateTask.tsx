import styled from "styled-components";
import { IconStar } from "./icons/IconStar";

const TaskModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 103.36px;
  margin-top: 25px;
  border-radius: 25px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  justify-content: start;

  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 17px;
`;

export const CreateTask = () => {
  return (
    <TaskModal>
      <Title>
        Titulo <IconStar />
      </Title>
      <div>Criar nota...</div>
    </TaskModal>
  );
};
