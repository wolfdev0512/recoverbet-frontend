import React from "react";

import { Container } from "./styled";

//---------------------------------------------------
const ProgressBar = (props) => {
  return (
    <Container>
      <progress value={props.value} max={props.max} />
    </Container>
  );
};

export default ProgressBar;
