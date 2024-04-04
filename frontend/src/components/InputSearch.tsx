import { useState } from "react";
import { styled } from "styled-components";
import { IconSearch } from "./icons/IconSearch";
import useListTasksContext from "../hooks/useListTasksContext";

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
  outline: none;

  color: #333333;
  font-size: 14.2px;

  line-height: 17.19px;

  @media (min-width: 768px) {
    width: 550px;
  }
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

  @media (min-width: 768px) {
    width: 550px;
  }
`;

export const InputSearch = () => {
  const { data, setTaskData } = useListTasksContext();

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(newValue.toLowerCase()),
    );
    setTaskData(filteredData);
  };

  return (
    <InputContainer>
      <TagInput
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <IconSearch />
    </InputContainer>
  );
};
