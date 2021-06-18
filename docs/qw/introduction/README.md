# 介绍

企微侧边栏项目是内嵌在企微客户端的H5页面，包括PC端的webview，手机端的webview，使用的是同一套代码，因为在企微pc端也是给了一个手机尺寸的视图。

## 技术栈

vue全家桶 + [企业微信API](https://work.weixin.qq.com/api/doc/90001/90144/90545) + [ElementUI](https://element.eleme.cn/#/zh-CN/) + [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/) + echarts + scss

## 注意点

1、只要是新页面需要和企微交互的就需在 `created` 周期中进行企微注入，使用 `this.$tool.setWxInit();`；

2、修改bug时，只需替换 `@/router/localInfo.js` 里 `data`中的 `tmToken` 字段，就可以拿到相对应测试的客户列表；
