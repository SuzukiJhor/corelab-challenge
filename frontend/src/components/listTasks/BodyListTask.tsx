import { styled } from "styled-components";

const BodyItem = styled.textarea`
  display: flex;
  width: 100%;
  padding: 20px 20px 0 20px;
  border: none;
  outline: none;
  resize: none;
`;

interface BodyListTaskProps {
  description?: string;
}

export const BodyListTask = ({ description }: BodyListTaskProps) => {
  return (
    <BodyItem defaultValue="" readOnly>
      {description}
    </BodyItem>
  );
};
