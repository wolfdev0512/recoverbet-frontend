import styled from "styled-components";

import ImageBack from "assets/images/back.png";

//------------------------------------------------

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(221.13deg, #050505 -58.95%, #181818 40.54%);
  border-radius: 14px;
`;

export const Button = styled.div`
  width: 100%;
  height: 90px;
  background: #1daf51;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;
`;

export const ActiveLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: url(${ImageBack});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveButton = styled.div`
  width: 350px;
  height: 60px;

  background: #1daf51;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  margin-top: 25px;
`;
export const Submit = styled.button`
  width: 100%;
  height: 70px;

  background: ${(props) =>
    props.authError
      ? "#AF1D1D"
      : props.touched
      ? props.error
        ? "#1DAF51"
        : "#AF1D1D"
      : "#F6BE76"};
  color: ${(props) => (props.touched ? "white" : "#050505")};

  border-radius: 12px;
  margin-top: 72px;

  @media screen and (max-width: 768px) {
    height: 56px;
  }
`;
