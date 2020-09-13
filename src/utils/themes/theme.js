import {
  typography,
  spacing,
  border,
  devices,
  mediaQuery,
} from "./tokens.json";

export const defaultTheme = {
  color: {
    blue: {
      100: "#2643b9",
      200: "#63C7FF",
      300: "#21edfc",
    },
    red: {
      100: "#d4009a",
      200: "#FF5C9C",
      300: "#ff90cd",
    },
    green: {
      100: "#00ffa2",
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
  elevation: {
    default:
      "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    elevated:
      "0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);",
    pressed: "",
  },
  devices: { ...devices },
  mediaQuery: { ...mediaQuery },
};

export const invertTheme = {};

export const luxuryTheme = {};
