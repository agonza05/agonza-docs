module.exports = {
  siteMetadata: {
    siteTitle: `Docs - Alberto Gonzalez`,
    defaultTitle: `Docs - Alberto Gonzalez`,
    siteTitleShort: `Docs - Alberto Gonzalez`,
    siteDescription: `Documentation and notes from my daily work.`,
    siteUrl: `https://docs.agonza.net`,
    siteAuthor: `@agonza05`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://docs.agonza.net`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
