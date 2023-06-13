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

  padding: 0px 0px 50px 0px;

  @media screen and (max-width: 768px) {
    background: none;
    border: none;
    width: 400px;
    height: fit-content;
    padding: 50px 0px;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    padding: 50px 0px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Toggle = styled.div`
  width: 30px;
  height: 15px;
  position: relative;
  cursor: pointer;
  border-radius: 7.5px;
  outline: none;
  background-color: ${(props) => (props.on ? "#1DAF51" : "#353b48")};

  margin-right: 12px;

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    will-change: transform;
    transform: translate(${(props) => (props.on ? 15 : 0)}px);
    transition: transform 0.2s ease-out;
    width: 15px;
    height: 15px;
    background: white;
    outline: none;
    border-radius: 50%;
  }

  @media screen and (max-width: 425px) {
    margin-right: 8px;
  }
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

export const GoRegister = styled(Link)`
  width: 100%;
  height: 70px;
  border: 1px solid #f6be76;
  border-radius: 12px;

  margin-top: 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 56px;
  }
`;

export const Error = styled.div`
  height: 20px;

  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;

  margin-bottom: 4px;
`;

export const CodeEmail = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  background: #292929;
  border-radius: 12px;

  margin-top: 70px;

  display: flex;
  align-items: center;
`;
export const LineOr = styled.div`
  width: 100%;

  position: relative;

  margin-top: 40px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-family: sora;
  font-weight: 400;
  font-size: 20px;
  text-align: center;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 40%;
    height: 1px;
    background: #f6be76;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0px;
    width: 40%;
    height: 1px;
    background: #f6be76;
  }
`;
