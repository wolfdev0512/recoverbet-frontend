import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  margin-bottom: 4px;
`;

export const Error = styled.div`
  height: 20px;

  display: flex;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: Poppins;
  line-height: 125%;
  color: white;
  background: none !important;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-family: sora;
    font-size: 16px;
    color: "#9B9B9B";
    background: none !important;
  }
`;

export const IconContainer = styled.div`
  width: 56px;
  height: 56px;
  min-height: 56px;
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.div`
  font-size: 14px;
  font-family: Poppins;
  line-height: 125%;
  color: ${(props) =>
    props.authError
      ? "#AF1D1D"
      : props.touched
      ? props.error
        ? "#1DAF51"
        : "white"
      : "white"};
`;
