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
`;
