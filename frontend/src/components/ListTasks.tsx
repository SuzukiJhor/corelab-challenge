import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { IconStar } from "./icons/IconStar";
import { IconEdit } from "./icons/IconEdit";
import { IconPaint } from "./icons/IconPaint";
import { IconClose } from "./icons/IconClose";
import useListTasksContext from "../hooks/useListTasksContext";
import { useDeleteTask } from "../hooks/useDeleteTask";

const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 435px;
  margin-top: 45px;
  background-color: #f0f2f5;

  @media (max-width: 414px) {
    width: 280px;
  }
`;

const ItemTask = styled.li`
  max-width: 390px;
  height: 425px;
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
  margin-top: ${(props) => (props.first == "true" ? "5px" : "70px")};
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

const TitleItem = styled.span`
  display: flex;
  line-height: 17.19px;
  text-align: left;
  color: #333333;
  border: none;
  font-family: "Inter", sans-serif;
  font-size: 14.2px;
  font-weight: 700;
  outline: none;
`;

const BodyItem = styled.span`
  display: flex;
  width: 100%;
  padding: 20px 20px 0 20px;
  border: none;
  outline: none;
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

const DeleteButton = styled.button`
  border: none;
  background: none;
`;

const ListItem = ({ title, description, first, onDelete }) => {
  const { data, setTaskData } = useListTasksContext();

  const { error, deleteTask } = useDeleteTask(
    "http://localhost:8000/api/tasks",
  );
  const handleDelete = () => {
    if (onDelete == undefined) {
      console.log("tratar");
      getOrderData();
      return;
    }
    deleteTask(onDelete);
    getOrderData();
  };

  const getOrderData = async () => {
    const orderData = data.filter((item) => item.id != onDelete);
    setTaskData(orderData);
  };

  return (
    <ItemTask first={first}>
      <TitleWrapper>
        <TitleItem>{title}</TitleItem>
        <IconStar />
      </TitleWrapper>
      <BodyItem>{description}</BodyItem>
      <FooterItem>
        <ActionsDiv>
          <IconEdit />
          <IconPaint />
        </ActionsDiv>
        <DeleteButton onClick={handleDelete}>
          <IconClose />
        </DeleteButton>
      </FooterItem>
    </ItemTask>
  );
};

export const ListTasks = () => {
  const { data } = useListTasksContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TaskListContainer>
          <div>
            <CategorySpan>Favoritas</CategorySpan>
            <ul>
              {data
                .slice()
                .reverse()
                .map((task, index) => (
                  <ListItem
                    key={index}
                    title={task.title}
                    description={task.description}
                    first={(index === 0).toString()}
                    onDelete={task.id}
                  />
                ))}
            </ul>
          </div>
        </TaskListContainer>
      )}
    </>
  );
};
