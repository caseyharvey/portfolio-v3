module.exports = {
  siteMetadata: {
    title: `caseys.tech`,
    author: `Casey Harvey`,
    siteUrl: `https://caseys.tech`,
    description: `The developer portfolio of Casey Harvey.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `caseys.tech`,
        short_name: `caseys.tech`,
        start_url: `/`,
        background_color: `#3a2435 `,
        theme_color: `#3a2435 `,
        display: `minimal-ui`,
        icon: `src/images/pink-c-favicon.svg`,
      },
    },
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-sitemap`,
  ],
}
