import { styled } from "styled-components";
import { IconCloseHeader } from "./IconCloseHeader";
import { LogoHeader } from "./Logo";
import { InputSearchHeader } from "./InputSearch";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px;
  height: 57px;
  gap: 5px;
  background: #ffffff;
`;

const Header = () => {
  return (
    <TagHeader>
      <LogoHeader />
      <InputSearchHeader />
      <IconCloseHeader />
    </TagHeader>
  );
};

export default Header;
