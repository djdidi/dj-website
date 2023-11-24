import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DJ的博客',
  tagline: 'Drop The Beat',
  // favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://djdidi.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
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
      title: 'DJ的博客',
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'frontendBase',
          label: '前端基础',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wheelSource',
          label: '轮子源码',
          position: 'left',
        },
        {
          to: '/blog/welcome',
          label: 'blog',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://cloud.tencent.com',
          label: '外链T',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    footer: {
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
