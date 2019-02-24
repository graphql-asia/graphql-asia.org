const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "GraphQL Asia",
    author: "Tobias Meixner",
    description: "GraphQL Asia - Asia's first GraphQL conference"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`,`assets`, `images`),
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GraphQL Asia',
        short_name: 'GraphQL Asia',
        start_url: '/',
        background_color: '#E535AB',
        theme_color: '#E535AB',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
