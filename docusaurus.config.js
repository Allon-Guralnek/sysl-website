module.exports = {
  title: 'Sysl',
  tagline: 'System Specification Language',
  url: 'https://sysl.io',
  baseUrl: '/',
  favicon: 'img/logo-blue-net-s.png',
  organizationName: 'anz-bank', // Usually your GitHub org/user name.
  projectName: 'sysl', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Sysl',
      logo: {
        alt: 'Sysl Logo',
        src: 'img/logo-blue-net-s.png',
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
          editUrl: 'https://github.com/anz-bank/sysl-website/edit/master/docs/',
          admonitions: {
            infima: true,
            customTypes: {
              right: {
                ifmClass: 'success',
                keyword: 'right',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>',
              },
              wrong: {
                ifmClass: 'danger',
                keyword: 'wrong',
                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>',
              },
            }
          },
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
    "https://fonts.googleapis.com/css?family=Lato:wght@400;900|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [],
};
