// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  url: 'https://blog.djdidi.xyz',
  baseUrl: '/',

  title: 'Hello!',
  favicon: 'img/favicon.svg',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: '网站名字？',
        logo: {
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '一些Wiki',
          },
          {
            to: '/blog/welcome',
            label: '一些Blog',
            position: 'left',
          },
          {
            href: 'https://cloud.tencent.com',
            label: '外链T',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '组别A',
            items: [
              {
                label: '内部跳转',
                to: '/docs/intro',
              },
              {
                label: '外部跳转',
                href: 'https://cloud.tencent.com',
              },
            ],
          },
        ],
        copyright: `<div>Built with Docusaurus. 晋ICP备20003213号-1</div> `,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
