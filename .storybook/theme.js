// https://storybook.js.org/docs/react/configure/theming
import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  brandTitle: "Rabii Luena",
  brandUrl: "https://rabiiluena.com",

  colorPrimary: "white",
  // colorSecondary: "white",
  textColor: "white",

  appBg: "#2643b9",
  appBorderRadius: 4,

  // Toolbar
  barBg: "#2643b9",
  barTextColor: "#DDDDDD",
  barSelectedColor: "#FFFFFF",
});
