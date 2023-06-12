import styled from "styled-components";

//-------------------------------------------------

export const Layout = styled.div`
  position: fixed;

  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;

  z-index: 5;

  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(18px);
`;

export const Container = styled.div`
  position: relative;

  width: ${(props) => (props.width ? props.width : "600px")};
  height: ${(props) => (props.height ? props.height : "700px")};

  max-height: calc(100vh - 140px);

  background: linear-gradient(161.7deg, #050505 -45.59%, #181818 31.9%);
  border: 1px solid rgba(255, 255, 255, 0.13);

  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;
  padding: 50px 0px 50px 0px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;

  top: 20px;
  right: 20px;

  cursor: pointer;
`;
