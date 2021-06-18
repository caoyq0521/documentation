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
    nav: [
      { text: 'web', link: '/web/' },
      // { text: 'H5', link: '/H5/' },
      { text: '企微', link: '/qw/introduction/' },
    ],
    sidebar: {
      '/web/': [
        {
          title: '组件',
          sidebarDepth: 1,
          children: [
            { title: 'appletsUpload 营销内容上传', path: '/web/components/appletsUpload' },
            { title: 'DeptSelect 员工/部门选择', path: '/web/components/DeptSelect' },
            { title: 'HjBaseRichText 富文本', path: '/web/components/HjBaseRichText' },
            { title: 'HjBaseTitle 标题', path: '/web/components/HjBaseTitle' },
            { title: 'HjDateRange 时间范围', path: '/web/components/HjDateRange' },
            { title: 'HjDayMonthYearRangePicker 日周月时间范围', path: '/web/components/HjDayMonthYearRangePicker' },
            { title: 'HjDragSort 拖拽', path: '/web/components/HjDragSort' },
            { title: 'HjFileIcon 文件icon', path: '/web/components/HjFileIcon' },
            { title: 'HjHelpTip 提示信息', path: '/web/components/HjHelpTip' },
            { title: 'HjPagination 分页', path: '/web/components/HjPagination' },
            { title: 'HjPreviewDialog 预览弹框', path: '/web/components/HjPreviewDialog' },
            { title: 'HjSwitchTable 标签页', path: '/web/components/HjSwitchTable' },
            { title: 'HjSearchInput 输入框', path: '/web/components/HjSearchInput' },
            { title: 'HjSharePreview 分享预览', path: '/web/components/HjSharePreview' },
            { title: 'HjTag 标签', path: '/web/components/HjTag' },
            { title: 'ImgCutter 图片裁剪', path: '/web/components/ImgCutter' },
          ]
        },
        {
          title: '指令',
          path: '/web/directive/'
        },
        {
          title: '混入',
          children: [
            { title: 'listPage 分页', path: '/web/mixins/listPage' },
            { title: 'authInfo 授权', path: '/web/mixins/authInfo' },
            { title: 'fieldList 字段', path: '/web/mixins/fieldList' },
            { title: 'h5Auth H5授权', path: '/web/mixins/h5Auth' },
          ]
        },
        {
          title: '过滤器',
          children: [
            { title: 'phoneSecret 电话加密', path: '/web/filters/phoneSecret' },
            { title: 'timeAgo 距现在多久', path: '/web/filters/timeAgo' },
            { title: 'numberFormatter 数字转文件单位', path: '/web/filters/numberFormatter' },
            { title: 'toThousandFilter 数字', path: '/web/filters/toThousandFilter' },
            { title: 'uppercaseFirst 首字母大写', path: '/web/filters/uppercaseFirst' },
            { title: 'slice 字符串截取', path: '/web/filters/slice' },
            { title: 'sliceDot 字符串...', path: '/web/filters/sliceDot' },
            { title: 'dateTime 时间转换', path: '/web/filters/dateTime' },
            { title: 'state 启用、停用', path: '/web/filters/state' },
            { title: 'fileSize 文件大小', path: '/web/filters/fileSize' },
            { title: 'second 时间转换', path: '/web/filters/second' },
            { title: 'sliceDotFront ...字符串', path: '/web/filters/sliceDotFront' },
            { title: 'serviceTypeInfoFilter 判断公众号', path: '/web/filters/serviceTypeInfoFilter' },
            { title: 'verifyTypeInfoFilter 公众号认证', path: '/web/filters/verifyTypeInfoFilter' },
            { title: 'dateFilter 时间格式化', path: '/web/filters/dateFilter' },
            { title: 'moneyFilter 金额', path: '/web/filters/moneyFilter' },
          ]
        },
        {
          title: '方法',
          path: '/web/methods/'
        }
      ],
      '/h5/': [],
      '/qw/': [
        {
          title: '介绍',
          path: '/qw/introduction/'
        },
        {
          title: '组件',
          children: [
            { title: 'BaseExpandCollapse 文本超出隐藏', path: '/qw/components/BaseExpandCollapse' },
            { title: 'HjFileIcon 文件icon', path: '/qw/components/HjFileIcon' },
            { title: 'QwBack 返回', path: '/qw/components/QwBack' },
            { title: 'QwDialog 弹框', path: '/qw/components/QwDialog' },
            { title: 'QwSearch 搜索', path: '/qw/components/QwSearch' },
          ]
        },
        {
          title: '混入',
          children: [
            { title: 'clickOutside 点击外部', path: '/qw/mixins/clickOutside' },
            { title: 'encrypt 手机号复制', path: '/qw/mixins/encrypt' }
          ]
        },
        {
          title: '方法',
          path: '/qw/methods/'
        },
        {
          title: '目录结构',
          path: '/qw/directory/'
        }
      ]
    }
  },
  plugins: [
    'demo-container',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    require('dateformat')
  ],
}