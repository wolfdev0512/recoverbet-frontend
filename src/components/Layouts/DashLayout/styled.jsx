import styled from "styled-components";

//------------------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  min-width: 100vw;
  min-height: 100vh;

  width: 100%;

  display: flex;
  background: #0c0c0c;

  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 294px;

  padding: 40px 35px 80px 35px;

  background: linear-gradient(141.49deg, #050505 -13.04%, #181818 72.91%);

  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.12);

  border-radius: 0px 25px 25px 0px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;
export const Menu = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  margin-top: 25px;

  width: 100%;

  padding: 10px 10px 0px 10px;
`;
export const MainContainer = styled.div`
  width: calc(100vw - 294px);

  padding: 70px 80px;

  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const User = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  padding: 10px;
  border: 1px solid #f6be76;
  border-radius: 40px;
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
