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
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `logo.png` }]
 ],
  title: "文档",
  description: "This is front-end documentation.",
  base: '/documentation/',
  themeConfig: {
    lastUpdated: '最后更新时间',
    repo: 'caoyq0521/documentation',
    repoLabel: '查看源码',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    // nav: [
    //   { text: 'web', link: '/web' },
    //   { text: 'H5', link: '/H5' },
    //   { text: '企微', link: '/qw' },
    // ],
    sidebar: {
      '/web/': [
        {
          title: '组件',
          sidebarDepth: 1,
          children: [
            { title: 'HjBaseTitle', path: '/web/components/HjBaseTitle' },
            { title: 'appletsUpload', path: '/web/components/appletsUpload' }
          ]
        },
        {
          title: '指令',
          path: '/web/directive/'
        },
        {
          title: '混入',
          path: '/web/mixins/'
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
    }
    // sidebar: [
      // {
      //   title: '前端',
      //   collapsable: true,
      //   sidebarDepth: 2,
      //   children: [
      //     { title: '前端内容', path: '/web/components/test' },
      //     { title: '前端01', path: '/web/components/test2' },
      //   ]
      // }
    // ]
    
  },
  plugins: ['demo-container', '@vuepress/back-to-top'],
  "demo-block": {
    "hide-text": "隐藏代码",
    "show-text": "显示代码",
    "copy-text": "复制代码",
    "copy-success": "复制成功"
  }
}