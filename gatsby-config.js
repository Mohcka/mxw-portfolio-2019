require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `MXW`,
    siteTitleAlt: `MXW Portfolio`,
    siteHeadline: `MXW Portfolio`,
    siteUrl: `https://mxw-portfolio.netlify.com/`,
    siteDescription: `Check out my portfolio, yeah?s`,
    siteLanguage: `en`,
    siteImage: `/banner2.jpg`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MXW Portfolio - Mohcka/mxw-portfolio-2019`,
        short_name: `Mohcka's Portfolio`,
        description: `Check out my portfolio, yeah?`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
