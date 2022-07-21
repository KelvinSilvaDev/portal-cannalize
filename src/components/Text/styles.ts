import styled, { css } from "styled-components";
import { TextProps } from "../../utils/TextTypes";

export const changeFont = {
  h1: css`
    font-size: 1rem;
  `,
  h2: css`
    font-size: 1rem;
  `,
  display1: css`
    font-size: 1rem;
  `,
  display2: css`
    font-size: 1rem;
  `,
  sml: css`
    font-size: 1rem;
  `,
  md: css`
    font-size: 1rem;
  `,
  lg: css`
    font-size: 1rem;
  `,
};
export const changeColor = {
  primary: css`
    color: 1rem;
  `,
  secondary: css`
    color: 1rem;
  `,
  tertiary: css`
    color: 1rem;
  `,
  pathway: css`
    color: 1rem;
  `,
  white: css`
    color: 1rem;
  `,
  black: css`
    color: 1rem;
  `,
  gray: css`
    color: 1rem;
  `,
};

export const Container = styled.span<TextProps>`
  ${({ type }) => changeFont[type || "md"]};
  ${({ color }) => changeColor[color || "black"]};
`;
