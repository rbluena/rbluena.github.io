import { typography, spacing, border } from "./tokens.json";

export const defaultTheme = {
  color: {
    blue: {
      100: "#3685A8",
      200: "#63C7FF",
      300: "#9BFAFF",
    },
    red: {
      100: "#FF006E",
      200: "#FF5C9C",
    },
    monochrome: {
      100: "#333333",
      200: "#444444",
      300: "#666666",
      400: "#999999",
      500: "#DDDDDD",
      600: "#EEEEEE",
      700: "#F3F3F3",
      800: "#F8F8F8",
      900: "#FFFFFF",
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
