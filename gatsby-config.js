/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Brandon Lim`,
    description: `Hello! My name is Brandon Lim and I am currently a student studying at Singapore Institute of Technology, majoring in BE in Informations and Communications Technology (Software Engineering).`,
    keywords: `JustBrandonLim, Brandon Lim, Portfolio, Programming, Blog, CTF, Web Development, Coding, Software Engineer, Software Developer`,
    siteUrl: `https://justbrandonlim.com/`,
    language: `en-SG`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 300,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-125BWRKTSY"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brandon Lim`,
        short_name: `BL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6366f1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
};
