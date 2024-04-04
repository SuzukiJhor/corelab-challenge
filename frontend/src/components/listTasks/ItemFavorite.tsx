import { styled } from "styled-components";
import { IconStar } from "../icons/IconStar";
import useListTasksContext from "../../hooks/useListTasksContext";
import { useEffect } from "react";

const FavoriteButton = styled.button`
  border: none;
  background: none;
`;

export const ItemFavorite = ({ handleFavorite, favorite }) => {
  const { data, setTaskData } = useListTasksContext();

  useEffect(() => {
    setTaskData(data);
  }, []);

  const IsFavorite = () => {
    const currentTask = data.find((task) => task.id === favorite);
    if (currentTask && currentTask.is_favorite) {
      return currentTask.is_favorite === "true" ? "true" : "false";
    }
    return "false";
  };

  return (
    <FavoriteButton type="button" onClick={handleFavorite}>
      <IconStar fill="" stroke={IsFavorite() === "true" ? "yellow" : "none"} />
    </FavoriteButton>
  );
};
