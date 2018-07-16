module.exports = {
  siteMetadata: {
    title: '#100 Days of Code',
  },
  plugins: ['gatsby-plugin-react-helmet',
            `gatsby-transformer-remark`,
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `src`,
                path: `${__dirname}/src/blog/`,
              },
            }
],
}
