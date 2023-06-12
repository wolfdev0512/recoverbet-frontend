import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Input = styled.input`
  position: relative;

  border: 1px solid #9b9b9b;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: transparent;
  border-radius: 3px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:before {
    content: "";
    display: block;
    width: 7px;
    height: 15px;
    border: solid #1daf51;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    position: absolute;
    top: 1px;
    left: 6px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  /* Show checkmark when checkbox is checked */
  &:checked:before {
    opacity: 1;
  }
`;

export const Error = styled.div`
  height: 20px;

  display: flex;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  margin-bottom: 4px;
`;
