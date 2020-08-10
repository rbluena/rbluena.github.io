module.exports = {
  siteMetadata: {
    title: `Rabii Luena`,
    headline: `Software Engineer and JavaScript Enthusiast`,
    description: `Hi! I am Rabii Luena, a front-end and mobile application developer. `,
    author: `@rbluena`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@app-components": "./components",
          "@app-helpers": "./helpers",
          static: {
            root: "./public",
            alias: "./static",
          },
        },
      },
    },
  ],
};
