import { styled } from "styled-components";

import { IconEdit } from "../icons/IconEdit";
import { IconPaint } from "../icons/IconPaint";
import { IconClose } from "../icons/IconClose";
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

export const FooterItemTask = ({ handleDelete }) => {
  return (
    <FooterItem>
      <ActionsDiv>
        <IconEdit />
        <IconPaint />
      </ActionsDiv>
      <DeleteButton onClick={handleDelete}>
        <IconClose />
      </DeleteButton>
    </FooterItem>
  );
};
