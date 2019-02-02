module.exports = {
  siteMetadata: {
    title: "GraphQL Asia",
    author: "Tobias Meixner",
    description: "GraphQL Asia - Asia's first GraphQL conference"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GraphQL Asia',
        short_name: 'starter',
        start_url: '/',
        background_color: '#E535AB',
        theme_color: '#E535AB',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
