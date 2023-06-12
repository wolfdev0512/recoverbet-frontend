import styled from "styled-components";

import { Link } from "react-router-dom";

//-------------------------------------------------

export const Layout = styled.div`
  width: 920px;
  height: 500px;

  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    218.38deg,
    #050505 -41.34%,
    #131313 33.73%,
    #181818 63.06%
  );

  border: 1px solid #af1d1d;
  border-radius: 44px;

  @media screen and (max-width: 1024px) {
    width: 700px;
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
    background: none;
    border: none;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    height: fit-content;
    padding: 50px 0px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;
export const Button = styled(Link)`
  margin-top: 50px;

  width: 500px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #af1d1d;
  border-radius: 12px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }
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
