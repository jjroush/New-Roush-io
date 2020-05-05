const isLocal = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    title: 'Roush Portfolio Website',
    desc: "Hey, I'm Jacob and I create things for the web.",
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon'
            }
          },
        ],
      },
    },
    {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: [`.mdx`, `.md`],
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout.js'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-88693051-2',
        // Puts tracking script in the head instead of the body
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
        ignore: isLocal ? [] : ['**/_*.md']
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'roushio',
        protocol: 'https',
        hostname: 'roush.io',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
