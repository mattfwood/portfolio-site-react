module.exports = {
  siteMetadata: {
    title: 'Matt Wood | Developer',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wetfygr1eqh0`,
        accessToken: `60cbad148b9e4801a76825865de8ec2a7f7f33582aff8c1033814675300e2f25`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};
