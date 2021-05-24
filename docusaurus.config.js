/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');

const globalVariables = {
  'jarbirdVersion': '0.5.2',
  'ihlogVersion': '0.6.1'
}

module.exports = {
  title: 'HKHC',
  tagline: 'HKHC code collection',
  url: 'https://hkhc.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HKHC',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          href: 'https://hkhc.github.io/jarbird',
          label: 'Jarbird',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'ihlog/index',
          label: 'IHLog',
          position: 'left',
        },
        {
          href: 'https://github.com/hkhc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HKHC. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: ['yaml', 'groovy', 'kotlin', 'shell-session', 'properties'],
      // Check custom.css for the style if line highlight
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        ihlog: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/hkhc/hkhc.github.io/ihlog',
          remarkPlugins: [
            [require(path.resolve(__dirname, './src/remarkPlugins/hkhc-remake-variables')), {
              dict: globalVariables
            }],
            require('remark-docusaurus-tabs')
          ],
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/hkhc/hkhc.github.io/',
          remarkPlugins: [
            [require(path.resolve(__dirname, './src/remarkPlugins/hkhc-remake-variables')), {
              dict: globalVariables
            }],
            require('remark-docusaurus-tabs')
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/hkhc/hkhc.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
