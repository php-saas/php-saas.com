import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'PHP-SaaS',
  tagline: 'The everything-included starter kit for your next idea',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://php-saas.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'php-saas', // Usually your GitHub org/user name.
  projectName: 'php-saas', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          includeCurrentVersion: true,
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/php-saas/php-saas.com/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'PHP-Saas',
      logo: {
        alt: 'PHP-Saas Logo',
        src: 'img/logo.svg',
      },
      items: [
        // { to: '/docs/introduction', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/php-saas',
          position: 'right',
          className: 'header-github-link',
        },
        {
          href: 'https://x.com/saeed_vz',
          position: 'right',
          className: 'header-x-link',
        },
        {

          href: 'https://youtube.com/saeedvaziry',
          position: 'right',
          className: 'header-youtube-link',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Early Access',
              to: '/docs/early-access',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              href: 'https://x.com/saeed_vz',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/php-saas',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PHP SaaS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php']
    },
    plugins: [
      ['./src/plugins/tailwind-config.js', {}],
    ]
  } satisfies Preset.ThemeConfig,
};

export default config;
