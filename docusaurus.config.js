// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AppBaza',
  tagline: 'Build. Deploy. Iterate.',
  favicon: 'img/appbaza-favicon.ico',

  // Set the production url of your site here
  url: 'https://appbaza.com',
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {to: '/mobyd', label: 'MOBYD', title:'Mobile monitoring and tracking for your products', position: 'left'},
          {to: '/nest', label: 'NEST', title:'Market-ready Next.js and Stripe project template', position: 'left'},
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            to: '/docs',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'indexDocsSidebar',
                label: 'Index',
              },
              {
                type: 'docSidebar',
                sidebarId: 'mobydDocsSidebar',
                label: 'MOBYD Docs',
              },
              {
                type: 'docSidebar',
                sidebarId: 'nestDocsSidebar',
                label: 'NEST Docs',
              },
            ]
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'MOBYD',
                title: 'Mobile monitoring and tracking for your projects',
                to: '/mobyd',
              },
              {
                label: 'NEST',
                title: 'Market-ready Next.js and Stripe project template with dashboards',
                to: '/nest',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Index',
                title: 'Catalogue of all AppBaza project documentations',
                to: '/docs',
              },
              {
                label: 'MOBYD Docs',
                title: 'Documentation for MOBYD: mobile monitoring and tracking for your project',
                to: '/docs/mobyd',
              },
              {
                label: 'NEST Docs',
                title: 'Documentation for NEST: market-ready Next.js and Stripe project template',
                to: '/docs/nest',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/appbaza',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AppBaza',
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
                label: 'V0.2.0',
                href: '/changelog',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/codervlogger',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} by <a href="https://twitter.com/KenanBekk">Kanan Rahimov</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
