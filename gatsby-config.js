module.exports = {
  siteMetadata: {
    title: `Rabii Luena`,
    headline: `Front-end Engineer and JavaScript Enthusiast`,
    description: `I am front-end and mobile application developer.`,
    author: `@rbluena`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
          "@app-data": "./data",
          static: {
            root: "./public",
            alias: "./static",
          },
        },
      },
    },
  ],
};
