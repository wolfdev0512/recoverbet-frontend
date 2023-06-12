import styled from "styled-components";

//------------------------------------------------------
export const Container = styled.div`
  progress[value] {
    width: 600px;
    height: 32px;
    appearance: none;

    ::-webkit-progress-bar {
      height: 32px;
      border-radius: 16px;
      background-color: #292929;
    }

    ::-webkit-progress-value {
      height: 32px;
      border-radius: 16px;
      background-color: #f6be76;
    }
  }
`;
