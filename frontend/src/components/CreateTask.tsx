import styled from "styled-components";
import { IconStar } from "./icons/IconStar";

const TaskModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 105px;
  margin-top: 25px;
  border-radius: 25px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  justify-content: start;
  align-items: center;
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

  width: 100%;
  padding-right: 15vw;
  height: 35px;
  font-size: 14.2px;
  font-weight: 700;
  line-height: 17.19px;
  text-align: left;
  text-color: #333333;
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

const BodyInput = styled.input`
  width: 100%;
  height: 35px;
  font:
    14.2px/1.5 "Inter",
    sans-serif;
  color: #333333;
  border: none;
  padding-left: 30px;

  table-layout: auto;
`;

export const CreateTask = () => {
  return (
    <TaskModal>
      <Form>
        <TitleWrapper>
          <TitleInput placeholder="Título" />
          <IconStar />
        </TitleWrapper>
        <BodyInput placeholder="Criar nota..." />
      </Form>
    </TaskModal>
  );
};
