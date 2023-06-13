import styled from "styled-components";

//------------------------------------------------------
export const Container = styled.div`
  width: 100%;

  .progress {
    width: 100%;
    height: 32px;
    border-radius: 16px;
    background-color: #292929;
  }

  .progress-bar {
    height: 100%;
    border-radius: 16px;
    background-color: #f6be76;
    transition: width 0.5s ease-in-out;
  }
`;
