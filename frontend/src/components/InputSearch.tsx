import { styled } from "styled-components";
import { IconSearch } from "./icons/IconSearch";
import { InputHTMLAttributes } from "react";

const TagInput = styled.input`
  width: 314.1px;
  height: 28px;
  padding: 9px;
  font: 400 14px/22px inherit;
  line-height: 22px;
  color: #d9d9d9;
  background: #ffffff;
  border-radius: 3px 0px 0px 0px;
  box-shadow: 1px 1px 3px 0px #00000040;
  border: 1px solid #d9d9d9;
  opacity: 0px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 314.1px;

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange?: (value: string) => void;
}

export const InputSearch = (props: InputSearchProps) => {
  function handle(value) {
    console.log(value);
  }
  return (
    <>
      <InputContainer>
        <TagInput onChange={(event) => handle(event.target.value)} {...props} />
        <IconSearch />
      </InputContainer>
    </>
  );
};
