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
          to: 'docs/getting_started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'https://geckogovernance.medium.com/', label: 'Blog', position: 'right'},
        {
          to: 'docs/api',
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
              to: 'docs/getting_started',
            },
            {
              label: 'Project',
              to: 'docs/projects',
            },
          ],
        },
        {
          title: 'Blogs',
          items: [
            {
              label: 'Medium',
              href: 'https://geckogovernance.medium.com/',
            },
            
          ],
        },
        {
          title: 'Social',
          items: [
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
