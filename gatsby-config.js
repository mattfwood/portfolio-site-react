module.exports = {
  siteMetadata: {
    title: 'Matt Wood | Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-remark-prismjs',
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (eg <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (eg for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: 'language-javascript',
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'wetfygr1eqh0',
        accessToken: '60cbad148b9e4801a76825865de8ec2a7f7f33582aff8c1033814675300e2f25',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};
