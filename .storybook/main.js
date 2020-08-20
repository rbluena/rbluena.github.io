const path = require("path");

module.exports = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],

  // Webpack Configurations
  webpackFinal: async config => {
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ];

    // Alternately, for an alias:
    config.resolve.alias = {
      "@app-components": path.resolve(__dirname, "..", "src", "components"),
      "@app-data": path.resolve(__dirname, "..", "src", "data"),
    };

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    return config;
  },
};
