module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Santa Barbara Re-entry Guide', // Navigation and Site Title
  titleAlt: 'Santa Barbara Re-entry', // Title for JSONLD
  description:
    'Every justice impacted Santa Barbara resident will have access to resources to help prevent recidivism and successfully return to society after jail or prison',
  url: 'https://gatsby-tutorial-starter.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://gatsby-tutorial-starter.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/cosb.png', // Used for SEO
  banner: 'static/logo/cosb.png',
  // JSONLD / Manifest
  favicon: 'static/logo/cosb.png', // Used for manifest favicon generation
  shortName: 'GatsbyTut', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Victor', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@csb', // Twitter Username
};
