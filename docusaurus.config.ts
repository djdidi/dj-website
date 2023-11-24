import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DJ\'s Blog',
  tagline: 'Drop The Beat',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://djdidi.xyz',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  // https://docusaurus.io/zh-CN/docs/api/themes/configuration
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'DJ\'s Blog',
      logo: {
        src: 'img/favicon.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'frontendBase',
          label: 'Note',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wheelSource',
          label: 'Code',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://github.com/djdidi/dj-website',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    footer: {
      style: 'light',
      copyright: `<div>Built with Docusaurus. 晋ICP备20003213号-1</div> `,
    },
    prism: {
      theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: 'WQHJ4LL8EQ',
      apiKey: '7c07a213043f10eef6b0978c9607da4c',
      indexName: 'dev_index',
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
  ],
};

export default config;
