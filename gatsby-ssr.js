import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "@app-utils/themes";
import ErrorWrapper from "@app-utils/ErrorWrapper";

import "typeface-fredoka-one";
import "typeface-lato";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <ErrorWrapper>{element}</ErrorWrapper>
  </ThemeProvider>
);
