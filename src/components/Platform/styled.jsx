import styled from "styled-components";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100%;
  max-width: 100%;
`;

export const SwiperItem = styled.div`
  height: 130px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(218.38deg, #050505 -41.34%, #181818 63.06%);
  border-radius: 5px;

  @media screen and (max-width: 1440px) {
    height: 100px;
  }
`;

export const LogoIcon = styled.img`
  width: 40px;
  height: 40px;
`;
