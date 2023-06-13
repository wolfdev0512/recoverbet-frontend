import styled from "styled-components";

// image
import LgBack from "assets/images/lg-back.jpg";

//------------------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  min-width: 100vw;
  min-height: 100vh;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #0c0c0c;

  &::before {
    content: "";
    background: url(${LgBack});
    background-position: center;
    background-size: cover;
    opacity: 0.24;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  overflow: hidden;

  @media screen and (max-width: 768px) {
    &::before {
      opacity: 0.05;
    }
  }
`;

export const Effect = styled.div`
  position: absolute;
  width: 1575px;
  height: 606.42px;
  left: calc(50% - 1575px / 2);
  bottom: -400px;

  background: ${(props) =>
    props.authError
      ? "#AF1D1D"
      : props.touched
      ? props.error
        ? "#1DAF51"
        : "#AF1D1D"
      : "#F6BE76"};

  opacity: 0.5;
  filter: blur(325.225px);
  border-radius: 50%;

  transition: all 0.2s;
  animation-name: opacity-change;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes opacity-change {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
