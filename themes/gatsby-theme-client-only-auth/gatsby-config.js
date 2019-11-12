require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "@renemn/gatsby-plugin-client-only-auth",
      options: {
        amplify: {
          Auth: {
            mandatorySignIn: true,
            region: process.env.GATSBY_AWS_COGNITO_REGION,
            userPoolId: process.env.GATSBY_AWS_COGNITO_USER_POOL_ID,
            userPoolWebClientId:
              process.env.GATSBY_AWS_COGNITO_POOL_WEB_CLIENT_ID,
          },
        },
        fonts: [
          "https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap",
        ],
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
