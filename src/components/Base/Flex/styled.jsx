import styled from "styled-components";

//----------------------------------------------

const setInlineStyle = ({
  flex,
  fDirection,
  fWrap,
  vAlign,
  hAlign,
  gap,
  p,
  m,
  w,
  minW,
  maxW,
  h,
  minH,
  maxH,
  back,
  border,
  radius,
}) => {
  return `
    ${flex ? `flex:                         ${flex};` : ``}
    ${fDirection ? `flex-direction:   ${fDirection};` : ``}
    ${fWrap ? `flex-wrap:                  ${fWrap};` : ``}
    ${vAlign ? `align-items:              ${vAlign};` : ``}
    ${hAlign ? `justify-content:          ${hAlign};` : ``}
    ${gap ? `gap:                            ${gap};` : ``}
    ${p ? `padding:                            ${p};` : ``}
    ${m ? `margin:                             ${m};` : ``}
    ${w ? `width:                              ${w};` : ``}
    ${minW ? `min-width:                    ${minW};` : ``}
    ${maxW ? `max-width:                    ${maxW};` : ``}
    ${h ? `height:                             ${h};` : ``}
    ${minH ? `min-height:                   ${minH};` : ``}
    ${maxH ? `max-height:                   ${maxH};` : ``}
    ${back ? `background:                   ${back};` : ``}
    ${border ? `border:                   ${border};` : ``}
    ${radius ? `border-radius:            ${radius};` : ``}
    `;
};

const setStyle = ($style) => {
  if (!$style) return;

  const { queries, ...rest } = $style;
  return `
    ${setInlineStyle(rest)}
    ${
      !queries
        ? ``
        : Object.keys(queries)
            .reverse()
            ?.map((breakpoint) => {
              return `
                            @media (max-width: ${breakpoint}px) {
                                    ${setInlineStyle(queries[breakpoint])}
                            }
                    `;
            })
            .join("")
    }
  `;
};

export const FlexContainer = styled.div`
  display: flex;
  ${(props) => (props.$style ? setStyle(props.$style) : ``)};
`;
