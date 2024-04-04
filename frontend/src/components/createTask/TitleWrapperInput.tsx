import styled from "styled-components";
import { IconStar } from "../icons/IconStar";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 25px 0 25px;
  margin-top: 5px;

  border-bottom: 1px solid #d9d9d9;
`;

const TitleInput = styled.input`
  display: flex;
  text-align: left;

  width: 100%;
  padding-right: 15vw;
  height: 35px;

  text-color: #333333;
  font-size: 14.2px;
  font-weight: 700;
  line-height: 17.19px;
  outline: none;
  border: none;

  ::placeholder {
    font-size: 14.2px;
    font-weight: 700;
    line-height: 17.19px;
    text-align: left;
    text-color: #333333;
  }
`;
interface TitleWrapperInputProps {
  placeholder: string;
  register: Dispatch<SetStateAction<any>>;
}

export const TitleWrapperInput = ({
  placeholder,
  register,
}: TitleWrapperInputProps) => {
  return (
    <TitleWrapper>
      <TitleInput placeholder={placeholder} {...register("title")} />
      <IconStar />
    </TitleWrapper>
  );
};
