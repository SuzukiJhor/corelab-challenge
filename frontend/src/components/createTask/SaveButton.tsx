import styled from "styled-components";

const SaveButton = styled.button`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.active ? "#00FF00" : "#e5f8e5")};
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  box-shadow: 1px 1px 3px 0px #00000040;
  margin: 3% 0 5% 15%;
  padding-bottom: 5px;

  visibility: ${(props) => (props.show === "true" ? "visible" : "hidden")};

  &:hover {
    background-color: ${(props) => (props.active ? "#00CC00" : "#d4f7d4")};
  }

  &:active {
    background-color: ${(props) => (props.active ? "#009900" : "#d4f7d4")};
  }
`;

interface SaveButtonTaskProps {
  show: string;
}

export const SaveButtonTask = ({ show }: SaveButtonTaskProps) => {
  return (
    <div>
      <SaveButton type="submit" show={show}>
        Salvar
      </SaveButton>
    </div>
  );
};
