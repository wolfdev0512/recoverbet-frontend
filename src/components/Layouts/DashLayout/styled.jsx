import styled from "styled-components";

//------------------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  min-width: 100vw;
  min-height: 100vh;

  z-index: 5;

  width: 100vw;
  height: 100vh;

  display: flex;
  background: #0c0c0c;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    overflow: scroll;
  }
`;

export const Sidebar = styled.div`
  width: 294px;

  padding: 40px 35px 80px 35px;

  background: linear-gradient(141.49deg, #050505 -13.04%, #181818 72.91%);

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.12);

  border-radius: 0px 25px 25px 0px;

  @media screen and (max-width: 1024px) {
    width: 230px;
    padding: 40px 15px 80px 15px;
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    flex-direction: row;
    width: 100%;
    height: 95px;
    padding: 0 0 10px;
    line-height: 80px;
    z-index: 9999;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    > div:last-child {
      display: none;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Menu = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: 100%;
  }
`;
export const Main = styled.div`
  margin-top: 25px;

  width: 100%;

  padding: 10px 10px 0px 10px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin-top: 0;
    padding: 0;
    height: 100%;

    > * {
      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }
      &:nth-child(2) {
        grid-area: 1 / 3 / 2 / 4;
        margin-top: -15px;
        color: #a9a8aa;

        > div {
          padding: 16px;
          width: auto;
          height: auto;
          background: #f6be76;
          border-radius: 7px;

          > svg {
            width: 22px;
            height: 22px;
          }
        }
      }
      &:nth-child(3) {
        grid-area: 1 / 2 / 2 / 3;
      }
      &:nth-child(4) {
        grid-area: 1 / 4 / 2 / 5;
      }
      &:nth-child(5) {
        grid-area: 1 / 5 / 2 / 6;
      }
    }

    > * {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;
export const MainContainer = styled.div`
  width: calc(100vw - 294px);
  height: 100vh;

  padding: 70px 80px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1440px) {
    padding: 70px 60px;
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 230px);
    padding: 70px 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
export const Header = styled.div`
  height: 80px;

  display: flex;

  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: fit-content;
    padding: 20px 40px;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 25px;
  }
`;
export const User = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 10px;
  border: 1px solid #f6be76;
  border-radius: 40px;

  #text {
    display: block;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;
export const UserImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Button = styled.button`
  width: 100%;
  height: 70px;
  background: #1daf51;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 130px);

  margin-top: 50px;

  @media screen and (max-width: 1440px) {
    margin-top: 30px;
  }

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent;
  }

  @media screen and (max-width: 768px) {
    height: fit-content;
    margin: auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
