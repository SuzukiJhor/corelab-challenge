import { styled } from "styled-components";
import { IconStar } from "./icons/IconStar";
import { IconEdit } from "./icons/IconEdit";
import { IconPaint } from "./icons/IconPaint";
import { IconClose } from "./icons/IconClose";

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 435px;
  margin-top: 45px;

  background-color: #f0f2f5;
`;

const ItemTask = styled.li`
  width: 100%;
  height: 435px;
  font:
    14.2px/1.5 "Inter",
    sans-serif;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
`;

const CategorySpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  width: 291.81px;
  height: 15.94px;
  margin-left: 15px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 5px;
  padding: 0 20px 0 20px;
  border-bottom: 1px solid #d9d9d9;
`;

const TitleItem = styled.h5`
  display: flex;
  width: 100%;
  max-width: 300px;

  line-height: 17.19px;
  text-align: left;
  color: #333333;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14.2px;
  font-weight: 700;
`;

const BodyItem = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 20px 0 20px;
`;

const FooterItem = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 25px 5px 25px;
`;

const ActionsDiv = styled.div`
  display: flex;
  margin-left: 5px;
  gap: 10px;
`;

const ListItem = () => {
  return (
    <ItemTask>
      <TitleWrapper>
        <TitleItem>Teste Algum titulo</TitleItem>
        <IconStar />
      </TitleWrapper>

      <BodyItem>
        Clique ou arraste o arquivo para esta área para fazer upload Clique ou
        arraste o arquivo para esta área para fazer upload Clique ou arraste o
        upload
      </BodyItem>

      <FooterItem>
        <ActionsDiv>
          <IconEdit />
          <IconPaint />
        </ActionsDiv>
        <div>
          <IconClose />
        </div>
      </FooterItem>
    </ItemTask>
  );
};

export const ListTasks = () => {
  return (
    <>
      <TaskListContainer>
        <div>
          <CategorySpan>Favoritas</CategorySpan>
          <ul>
            <ListItem />
          </ul>
        </div>
      </TaskListContainer>
      <TaskListContainer>
        <div>
          <CategorySpan>Outras</CategorySpan>
          <ul>
            <ListItem />
          </ul>
        </div>
      </TaskListContainer>
    </>
  );
};
