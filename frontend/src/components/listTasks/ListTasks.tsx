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

  @media (min-width: 768px) {
    border: none;
    width: 95vw;
    border-radius: 5px;
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

const TableTasks = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100vw;
    height: 25%;
  }
`;

const ListTasks = () => {
  const { data } = useListTasksContext();
  const [loading, setLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [nonFavoriteItems, setNonFavoriteItems] = useState([]);

  useEffect(() => {
    if (data) {
      const favorite = data.filter((item) => {
        return item.is_favorite === "true";
      });

      setFavoriteItems(favorite);

      const nonFavorite = data.filter((item) => {
        return item.is_favorite !== "true";
      });

      setNonFavoriteItems(nonFavorite);
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
            {favoriteItems.length > 0 ? (
              <TableTasks>
                {favoriteItems
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
              </TableTasks>
            ) : (
              <CategorySpan>Vazio</CategorySpan>
            )}
          </div>
          <div>
            <br />
            <br />
            <CategorySpan>Outras</CategorySpan>
            {nonFavoriteItems.length > 0 ? (
              <TableTasks>
                {nonFavoriteItems
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
              </TableTasks>
            ) : (
              <CategorySpan>Vazio</CategorySpan>
            )}
          </div>
        </TaskListContainer>
      )}
    </>
  );
};

export default ListTasks;
