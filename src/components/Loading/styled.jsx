import styled from "styled-components";

// image
import LgBack from "assets/images/lg-back.jpg";

//------------------------------------------------

export const Layout = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${LgBack});
  background-position: center;
  background-size: cover;

  overflow: hidden;
`;

export const Effect = styled.div`
  position: absolute;
  width: 1575px;
  height: 606.42px;
  left: calc(50% - 1575px / 2);
  bottom: -350px;

  background: #f6be76;
  opacity: 0.5;
  filter: blur(325.225px);

  border-radius: 50%;

  animation-name: color-change;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @keyframes color-change {
    0% {
      background: #f6be76;
    }
    25% {
      background: #1daf51;
    }
    50% {
      background: #af1d1d;
    }
    75% {
      background: #1daf51;
    }
    100% {
      background: #f6be76;
    }
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
`;

export const Text = styled.div`
  margin-top: -120px;

  font-family: Sora;
  font-size: 40px;
  color: white;
`;
