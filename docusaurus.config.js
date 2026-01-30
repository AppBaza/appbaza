// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AppBaza for Developers',
  tagline: 'Build. Deploy. Iterate.',
  favicon: 'img/appbaza-favicon.ico',

  // Set the production url of your site here
  url: 'https://developer.appbaza.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AppBaza', // Usually your GitHub org/user name.
  projectName: 'appbaza', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
      // Replace with your project's social card
      image: 'img/appbaza-social-card.jpg',
      navbar: {
        title: 'AppBaza',
        logo: {
          alt: 'AppBaza: Build. Deploy. Iterate. Open-source and Open Core software development projects.',
          src: 'img/appbaza-logo.png',
        },
        items: [
          { to: '/nest', label: 'NEST', title: 'Market-ready Backend-as-a-Service for your mobile and web apps', position: 'left' },
          { to: '/askcode', label: 'AskCode', title: 'Market-ready Backend-as-a-Service for your mobile and web apps', position: 'left' },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            to: '/docs',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'indexDocsSidebar',
                label: 'INDEX',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nestDocsSidebar',
                label: 'NEST',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mobydDocsSidebar',
                label: 'MOBYD',
              },
            ]
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.appbaza.com',
            label: 'AppBaza.com',
            position: 'right',
          },
          {
            href: 'https://github.com/AppBaza',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'NEST',
                title: 'Market-ready Backend-as-a-Service for your mobile and web apps',
                to: '/nest',
              },
              {
                label: 'Dev Kit',
                title: 'Developer toolkit for building AI SaaS apps',
                to: 'https://devkit4ai.com/',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'INDEX',
                title: 'Catalogue of all AppBaza project documentations',
                to: '/docs',
              },
              {
                label: 'NEST Docs',
                title: 'Documentation for NEST: market-ready Backend-as-a-Service for your mobile and web apps',
                to: '/docs/nest',
              },
              {
                label: 'MOBYD Docs',
                title: 'Documentation for MOBYD: mobile monitoring and tracking for your project',
                to: '/docs/mobyd',
              },
              {
                label: 'Dev Kit Docs',
                title: 'Documentation for Dev Kit: AI SaaS Framework',
                to: 'https://docs.devkit4ai.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AppBaza',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AppBazaCOM',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'V0.7.0 (Jan 2026)',
                href: '/changelog',
              },
              {
                label: 'AppBaza.com',
                href: 'https://www.appbaza.com',
              },
              // {
              //   label: 'YouTube',
              //   href: 'https://www.youtube.com/codervlogger',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by <a href="https://www.linkedin.com/in/kananrahimov/">Kanan Rahimov</a>. Icons by <a href="https://www.behance.net/gulnarrahimzade">Gulnar Rahimzade</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
