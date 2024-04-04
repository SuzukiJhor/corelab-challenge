import { styled } from "styled-components";
import React, { useState, useEffect } from "react";

import useListTasksContext from "../../hooks/useListTasksContext";
import { ItemListTask } from "../listTasks/ItemListTask";

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

const CategorySpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  width: 291.81px;
  height: 15.94px;
  margin-left: 15px;
`;

const ListTasks = () => {
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
                  <ItemListTask
                    key={index}
                    title={task.title}
                    description={task.description}
                    first={(index === 0).toString()}
                    taskId={task.id}
                  />
                ))}
            </ul>
          </div>
        </TaskListContainer>
      )}
    </>
  );
};

export default ListTasks;
