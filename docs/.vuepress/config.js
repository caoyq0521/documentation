module.exports = {
  locales: {
    '/': {
      lang: "zh-CN",
      "demo-block": {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
        "copy-text": "复制代码",
        "copy-success": "复制成功"
      }
    }
  },
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: 'favicon.ico' }]
  ],
  title: "文档",
  description: "This is front-end documentation.",
  base: '/documentation/',
  themeConfig: {
    logo: 'logo.png',
    lastUpdated: '最后更新时间',
    repo: 'caoyq0521/documentation',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    // nav: [
    //   { text: 'web', link: '/web/' },
    //   { text: 'H5', link: '/H5/' },
    //   { text: '企微', link: '/qw/' },
    // ],
    sidebar: {
      '/web/': [
        {
          title: '组件',
          sidebarDepth: 1,
          children: [
            { title: 'HjBaseTitle', path: '/web/components/HjBaseTitle' },
            { title: 'appletsUpload', path: '/web/components/appletsUpload' },
            { title: 'HjHelpTip', path: '/web/components/HjHelpTip' },
            { title: 'HjDateRange', path: '/web/components/HjDateRange' },
            { title: 'HjDragSort', path: '/web/components/HjDragSort' },
            { title: 'HjPreviewDialog', path: '/web/components/HjPreviewDialog' },
            { title: 'HjBaseRichText', path: '/web/components/HjBaseRichText' },
            { title: 'HjSwitchTable', path: '/web/components/HjSwitchTable' },
            { title: 'HjTag', path: '/web/components/HjTag' },
            { title: 'ImgCutter', path: '/web/components/ImgCutter' },
          ]
        },
        {
          title: '指令',
          path: '/web/directive/'
        },
        {
          title: '混入',
          children: [
            { title: 'listPage', path: '/web/mixins/listPage' },
            { title: 'authInfo', path: '/web/mixins/authInfo' },
            { title: 'fieldList', path: '/web/mixins/fieldList' },
            { title: 'h5Auth', path: '/web/mixins/h5Auth' },
          ]
        },
        {
          title: '过滤器',
          path: '/web/filters/'
        },
        {
          title: '方法',
          path: '/web/methods/'
        }
      ],
      '/h5/': [],
      '/qw/': []
    }
  },
  plugins: [
    'demo-container',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
}