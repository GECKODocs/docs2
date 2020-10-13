module.exports = {
  title: 'GECKO Docs',
  tagline: '',
  url: 'https://geckodocs.github.io',
  baseUrl: '/docs2/',
  favicon: 'img/gecko-icon.png',
  organizationName: 'GECKODocs', // Usually your GitHub org/user name.
  projectName: 'docs2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GECKO',
      hideOnScroll: true, // set this to false if wanna keep the scrollbar fixed
      logo: {
        alt: 'My Site Logo',
        src: 'img/gecko-icon.png',
        srcDark : 'img/gecko-white.png',
      },
      items: [
        {
          to: 'docs2/gs1',
          activeBasePath: 'docs2',
          label: 'Docs',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'docs2/api1',
          label: 'API',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs2/gs1',
            },
            {
              label: 'Project',
              to: 'docs2/pr1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/gecko-limited',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/geckogovernance',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GECKO`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // un comment the line below to allow the user to make changes to pages in github
          //editUrl:'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
