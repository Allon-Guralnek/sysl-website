module.exports = {
  title: 'Sysl',
  tagline: 'System specification language',
  url: 'https://sysl.io',
  baseUrl: '/',
  favicon: 'img/Sysl_logo_only_blue.png',
  organizationName: 'anz-bank', // Usually your GitHub org/user name.
  projectName: 'sysl', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Sysl Logo',
        src: 'img/Sysl_logo_blue.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'docs/help', label: 'Help', position: 'right'},
        {
          href: 'https://anz-bank.github.io/sysl-playground/',
          label: 'Play',
          position: 'right',
        },
        {
          href: 'https://github.com/anz-bank/sysl',
          position: 'right',
          className: 'header-github-link',
          label: 'GitHub',
          'aria-label': 'GitHub repository',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
      ],
    },
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
    //   algoliaOptions: {}, // Optional, if provided by Algolia
    // },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Sysl.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/anz-bank/sysl-website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/anz-bank/sysl-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
