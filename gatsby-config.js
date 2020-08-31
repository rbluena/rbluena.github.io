module.exports = {
  siteMetadata: {
    baseUrl: `https://rabiiluena.com`,
    title: `Rabii Luena`,
    description: `CSS and JavaScript enthusiast. Just striving to become a better front-end engineer today than yesterday.`,
    author: `@rbluena`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-flow`,
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
          "@app-data": "./data",
          "@app-helpers": "./helpers",
          "@app-utils": "./utils",
          "@app-images": "./images",
          static: {
            root: "./public",
            alias: "./static",
          },
        },
      },
    },
  ],
};
