import { styled } from "styled-components";

import useListTasksContext from "../../hooks/useListTasksContext";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { TitleWrapperList } from "./TitleWrapperList";
import { BodyListTask } from "./BodyListTask";
import { FooterItemTask } from "./FooterItemList";
import { useUpdateTask } from "../../hooks/useUpdateTask";

const ItemTask = styled.li`
  max-width: 390px;
  height: 425px;
  font:
    14.2px/1.5 "Inter",
    sans-serif;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 3px 0px #00000040;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => (props.first == "true" ? "5px" : "70px")};

  @media (min-width: 768px) {
    margin-top: 5px;
  }
`;

export const ItemListTask = ({ title, description, first, taskId }) => {
  const { data, setTaskData } = useListTasksContext();

  const { updateTask, refetch } = useUpdateTask(
    "http://localhost:8000/api/tasks",
  );

  const { error, deleteTask } = useDeleteTask(
    "http://localhost:8000/api/tasks",
  );
  const handleDelete = () => {
    if (taskId == undefined) {
      console.log("tratar");

      setOrderData();
      return;
    }

    deleteTask(taskId);
    setOrderData();
  };

  const handleFavorite = async () => {
    const currentTaskIndex = data.findIndex((task) => task.id === taskId);
    if (currentTaskIndex !== -1) {
      const updatedFavoriteStatus =
        data[currentTaskIndex].is_favorite === "true" ? "false" : "true";
      updateTask(taskId, { is_favorite: updatedFavoriteStatus });

      const removedItem = data.splice(currentTaskIndex, 1);
      data.push(removedItem[0]);

      setTaskData([...data]);
    }
  };

  const setOrderData = async () => {
    const orderData = data.filter((item) => item.id != taskId);

    setTaskData(orderData);
  };

  return (
    <ItemTask first={first}>
      <TitleWrapperList
        favorite={taskId}
        title={title}
        handleFavorite={handleFavorite}
      />
      <BodyListTask BodyListTaskdescription={description}></BodyListTask>

      <FooterItemTask handleDelete={handleDelete} />
    </ItemTask>
  );
};
