// https://storybook.js.org/docs/react/configure/theming
import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "Rabii Luena",
  brandUrl: "https://rabiiluena.com",

  colorPrimary: "white",

  // UI
  appBg: "#63C7FF",
  appBorderRadius: 4,

  // Toolbar
  barBg: "#2643b9",
  barTextColor: "#DDDDDD",
  barSelectedColor: "#FFFFFF",
});
