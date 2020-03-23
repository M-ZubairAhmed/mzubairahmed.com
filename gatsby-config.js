module.exports = {
  siteMetadata: {
    title: `M-ZubairAhmed`,
    description: `Zubair's space on the web`,
    url: 'https://mzubairahmed.com',
    twitterUsername: '@Md_ZubairAhmed',
    author: `M-ZubairAhmed`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src'],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg 
              aria-hidden="true" 
              height="20" 
              version="1.1" 
              viewBox="0 0 16 16" 
              width="20">
              <path 
              fill-rule="evenodd" 
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
              </path>
              </svg>`,
              maintainCase: false,
              removeAccents: true,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              aliases: {
                js: 'javascript',
                sh: 'bash',
              },
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              showCaptions: true,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/data/posts`,
      },
    },
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        mdx: true,
        contentPath: `${__dirname}/src/data/slides/`,
        basePath: '/slides',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M-ZubairAhmed | Software developer`,
        short_name: `M-ZubairAhmed`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
