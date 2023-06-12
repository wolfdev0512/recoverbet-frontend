import React from "react";

// styled
import { SpanWrapper, TextWrapper } from "./styled";

//---------------------------------------------------

export const Span = (props) => {
  return (
    <SpanWrapper $style={props.$style} as={"span"} {...props.rest}>
      {props.children}
    </SpanWrapper>
  );
};

export const P = (props) => {
  return (
    <TextWrapper as="p" $style={props.$style} {...props.rest}>
      {props.children}
    </TextWrapper>
  );
};
