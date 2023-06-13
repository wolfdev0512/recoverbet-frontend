import styled from "styled-components";

// router
import { Link } from "react-router-dom";

export const Layout = styled(Link)`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 17px 25px;
  border-radius: 7px;
  margin-bottom: 10px;

  ${(props) => (props.active ? `background:#F6BE76;` : ``)}

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 100%;
    padding: 0;
    margin-bottom: 0;
    background: transparent;

    > div {
      margin: 0;
    }

    p {
      font-size: 12px;
      text-align: center;
      color: #C5C5C5;
      ${(props) => (props.active ? `color:#F6BE76;` : ``)}
    }

    ${({ active }) => active ? `
      &:not(:nth-child(2)):before {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%);
        width: 50px;
        height: 4px;
        border-radius: 0px 0px 4px 4px;
        background: #F6BE76;
        content: "";
      }
    ` : ``}
  }
`;
