import React from "react";

// styled
import { FlexContainer } from "./styled";

//---------------------------------------------------

const Flex = (props) => {
  return (
    <FlexContainer $style={props.$style} {...props.rest}>
      {props.children}
    </FlexContainer>
  );
};

export default Flex;
