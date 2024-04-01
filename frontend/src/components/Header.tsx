import { styled } from "styled-components";
import iconNote from "../assets/iconNote.png";
import { IconClose } from "./icons/IconClose";
import { Input } from "./Input";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px;
  height: 57px;
  gap: 5px;
`;

const Logo = styled.a`
  width: 104.41px;
  height: 29.7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Inter;
  font-size: 11.45px;
  font-weight: 400;
  line-height: 13.86px;
  text-align: left;
`;

const IconPng = styled.img`
  width: 29.27px;
  height: 29.7px;
`;

export const Header = () => {
  return (
    <TagHeader>
      <Logo>
        <IconPng src={iconNote} alt="Ícone da Logo" />
        CoreNotes
      </Logo>
      <div>
        <Input placeholder="Pesquisar notas" />
      </div>
      <div>
        <IconClose />
      </div>
    </TagHeader>
  );
};
