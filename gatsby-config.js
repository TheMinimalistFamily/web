require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Gia Đình Tối Giản`,
    siteTitleAlt: `Gia Đình Tối Giản - The Minimalist Family`,
    siteHeadline: `Gia Đình Tối Giản - The Minimalist Family`,
    siteUrl: `https://giadinhtoigian.com`,
    siteDescription: `Hành trình đơn giản hoá cuộc sống gia đình.`,
    siteLanguage: `vi`,
    author: `@antranapp`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Bài viết`,
            slug: `/blog`,
          },
          {
            title: `Giới thiệu`,
            slug: `/about`,
          },
        ],
        externalLinks: [
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gia Đình Tối Giản`,
        short_name: `gia-dinh-toi-gian`,
        description: `Blog của gia đình An, Liên, Manuel và Marie kể về lối sống tối giản.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
