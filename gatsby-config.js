module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "GTM-TPPVTZF",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    }
  ],
};
