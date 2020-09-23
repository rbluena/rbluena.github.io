module.exports = {
  siteMetadata: {
    siteUrl: `https://rabiiluena.com`,
    title: `Rabii Luena`,
    description: `Front-end development enthusiast. I am just striving to become better front-end engineer today than yesterday.`,
    author: `@rbluena`,
    image: "src/images/icon.png",
    keywords:
      "rabii luena, luena, rabii, software engineer, software developer, hiring, web developer, react developer, front-end developer, front-end engineer, javascript developer",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WDR53PG",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-178489560-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,

      options: {
        siteUrl: `https://www.rabiiluena.com`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rabiiluena.com`,
        short_name: `rabiiluena.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#21edfc`,
        display: `standalone`,
        icon: `src/images/appicons/favicon.png`,
        icons: [
          {
            src: `favicons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `favicons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
        ],
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
