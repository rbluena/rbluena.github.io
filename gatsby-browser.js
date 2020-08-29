import React from "react";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  ErrorWrapper,
  defaultTheme,
  invertTheme,
} from "@app-utils/themes";
import "typeface-fredoka-one";
import "typeface-lato";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ErrorWrapper>{element}</ErrorWrapper>
  </ThemeProvider>
);
