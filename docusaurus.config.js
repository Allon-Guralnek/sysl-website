module.exports = {
  title: 'Sysl',
  tagline: 'System specification language',
  url: 'https://sysl.io',
  baseUrl: '/',
  favicon: 'img/logo-blue-net-s.png',
  organizationName: 'anz-bank', // Usually your GitHub org/user name.
  projectName: 'sysl', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Sysl Logo',
        src: 'img/logo-blue.png',
      },
      links: [
        { to: 'docs/', label: 'Docs', position: 'right' },
        { to: 'docs/help', label: 'Help', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
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
            'https://github.com/anz-bank/sysl-website/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/anz-bank/sysl-website/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
  scripts: [],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [],
};
