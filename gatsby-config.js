const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Gazduig Creative Agency`,
    description: `Ütős megoldások, ütős márkák számára. Legyél feltűnőbb és menőbb a versenytársaidnál. Dolgozzunk együtt! Gazduig Creative Agency Budapest.`,
    author: `@gazduig`,
    url: 'https://gazduig.com',
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gazduig Creative Agency`,
        short_name: `Gazduig`,
        description: `Ütős megoldások, ütős márkák számára. Legyél feltűnőbb és menőbb a versenytársaidnál. Dolgozzunk együtt! Gazduig Creative Agency Budapest.`,
        lang: 'hu',
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors['brand-red']['500'],
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
        icons: [
          {
            src: `src/images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/images/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`,
          },
          {
            src: `src/images/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-172527734-1',
        anonymize: true,
        cookieDomain: 'gazduig.com',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        publicPath: 'kathi',
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
        ],
      },
    },
  ],
};
