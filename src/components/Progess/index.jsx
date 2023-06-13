import React from "react";

import { Container } from "./styled";

//---------------------------------------------------
const ProgressBar = (props) => {
  return (
    <Container>
      <div class="progress">
        <div
          class="progress-bar"
          style={{ width: (props.value / props.max) * 100 + "%" }}
        ></div>
      </div>
    </Container>
  );
};

export default ProgressBar;
