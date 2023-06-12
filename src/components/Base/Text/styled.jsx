import styled from "styled-components";

//----------------------------------------------

const setInlineStyle = ({
  color,
  size,
  weight,
  m,
  p,
  align,
  family,
  lH,
  w,
  minW,
  maxW,
  h,
  minH,
  maxH,
  decoration,
}) => {
  return `
    ${color ? `color:                      ${color};` : ``}
    ${size ? `font-size:                    ${size};` : ``}
    ${weight ? `  font-weight:            ${weight};` : ``}
    ${align ? `text-align:                 ${align};` : ``}
    ${family ? `font-family:              ${family};` : `font-family:Poppins;`}
    ${lH ? `line-height:                      ${lH};` : `line-height:120%;`}
    ${p ? `padding:                            ${p};` : ``}
    ${m ? `margin:                             ${m};` : ``}
    ${w ? `width:                              ${w};` : ``}
    ${minW ? `min-width:                    ${minW};` : ``}
    ${maxW ? `max-width:                    ${maxW};` : ``}
    ${h ? `height:                             ${h};` : ``}
    ${minH ? `min-height:                   ${minH};` : ``}
    ${maxH ? `max-height:                   ${maxH};` : ``}
    ${decoration ? `text-decoration:  ${decoration};` : ``}
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

export const TextWrapper = styled.div`
  ${(props) => (props.$style ? setStyle(props.$style) : ``)};
`;

export const SpanWrapper = styled(TextWrapper)`
  display: inline-block;
  ${(props) => (props.$style ? setStyle(props.$style) : ``)};
`;
