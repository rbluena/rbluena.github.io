import { typography, spacing, border } from "./tokens.json";

export const defaultTheme = {
  color: {
    primary: "#63C7FF",
    secondary: "#FFFFFF",
    monochrome: {
      lightest: "#FFFFFF",
      lighter: "#F8F8F8",
      light: "#F3F3F3",
      mediumlight: "#EEEEEE",
      medium: "#DDDDDD",
      mediumdark: "#999999",
      dark: "#666666",
      darker: "#444444",
      darkest: "#333333",
    },
  },
  typography: { ...typography },
  spacing: { ...spacing },
  border: { ...border },
};

export const invertTheme = {
  bgColors: {
    primary: "#000000",
  },
  colors: {
    primary: "#FFFFFF",
  },
  typography: { ...typography },
  spacing: { ...spacing },
};

export const laxuryTheme = {};
