import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'dj blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://blog.djdidi.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'djdidi', // Usually your GitHub org/user name.
  projectName: 'dj-website', // Usually your repo name.

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
          routeBasePath: '/',
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
    // Replace with your project's social card
    image: 'img/gouzi.png',
    navbar: {
      title: 'dj个人博客',
      logo: {
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '前端基础',
        },
        {
          to: '/blog/welcome',
          label: 'blog',
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
              to: '/blog/welcome',
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
      theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
