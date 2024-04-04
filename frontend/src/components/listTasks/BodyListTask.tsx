import { styled } from "styled-components";

const BodyItem = styled.span`
  display: flex;
  width: 100%;
  padding: 20px 20px 0 20px;
  border: none;
  outline: none;
`;

interface BodyListTaskProps {
  description?: string;
}

export const BodyListTask = ({ description }: BodyListTaskProps) => {
  return <BodyItem>{description}</BodyItem>;
};
