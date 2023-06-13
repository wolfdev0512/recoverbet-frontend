import styled from "styled-components";

import { Link } from "react-router-dom";

//--------------------------------------------------

export const Layout = styled.div`
  width: 700px;
  height: calc(100vh - 74px * 2);

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(
    218.38deg,
    #050505 -41.34%,
    #131313 33.73%,
    #181818 63.06%
  );

  border: 1px solid
    ${(props) =>
      props.authError
        ? "#AF1D1D"
        : props.touched
        ? props.error
          ? "#1DAF51"
          : "#AF1D1D"
        : "#F6BE76"};
  border-radius: 44px;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }

  padding: 70px 0px 70px 0px;

  @media screen and (max-width: 768px) {
    background: none;
    border: none;
    width: 400px;
    height: fit-content;
    padding: 70px 0px;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    padding: 70px 0px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
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

export const Button = styled.div`
  margin-top: 50px;

  width: 500px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #f6be76;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    width: 250px;
    height: 50px;
  }
  @media screen and (max-width: 425px) {
    width: 250px;
    height: 50px;
  }
`;
