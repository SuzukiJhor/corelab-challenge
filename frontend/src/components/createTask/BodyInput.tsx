import styled from "styled-components";

const BodyInput = styled.textarea`
  width: 95%;
  height: 50%;
  font:
    14.2px/1.5 "Inter",
    sans-serif;
  color: #333333;
  border: none;
  border-radius: 25px;
  padding: 5px 0 0 25px;
  outline: none;
  table-layout: auto;
  margin: 10px;
`;

interface BodyInputTaskProps {
  placeholder?: string;
  rows?: number;
  wrap?: string;
  register: Dispatch<SetStateAction<any>>;
  defaultValue?: string;
}

export const BodyInputTask = ({
  placeholder,
  rows,
  wrap,
  register,
  defaultValue,
}: BodyInputTaskProps) => {
  return (
    <BodyInput
      placeholder={placeholder}
      rows={rows}
      wrap={wrap}
      {...register("description")}
      defaultValue={defaultValue}
    />
  );
};
