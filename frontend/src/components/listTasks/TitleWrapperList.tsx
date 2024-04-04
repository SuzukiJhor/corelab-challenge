import { styled } from "styled-components";
import { ItemFavorite } from "./ItemFavorite";

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

interface TitleWrapperListProps {
  title?: string;
  favorite?: number;
}
export const TitleWrapperList = ({
  title,
  handleFavorite,
  favorite,
}: TitleWrapperListProps) => {
  return (
    <TitleWrapper>
      <TitleItem>{title}</TitleItem>
      <ItemFavorite favorite={favorite} handleFavorite={handleFavorite} />
    </TitleWrapper>
  );
};
