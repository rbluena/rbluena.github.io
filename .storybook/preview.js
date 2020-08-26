import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "../src/utils/themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind
  //       ? 0
  //       : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

// All down here trying to fix isseues with storybook and Gatsby

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
global.__BASE_PATH__ = "";

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};
