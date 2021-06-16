# 目录结构

```
.
├── public                                                    // 静态资源
│   ├── aes.js                                                // 手机隐藏手机好的加密js
│   ├── initUser.js                                           // 页面授权重定向的逻辑在vue之前
├── src                                                       // 源码目录
│   ├── assets                                                // 图片资源
│   ├── components                                            // 组件
│   ├── config                                                // 组件库配置
│   │   ├── plugins_echarts.js                                // echarts配置
│   │   ├── plugins_element.js                                // element配置
│   │   ├── plugins_emoji.js                                  // yhqEmoji配置
│   │   ├── plugins_share.js                                  // 企微分享配置
│   │   ├── plugins_vant.js                                   // vant配置
│   │   ├── plugins_vconsole.js                               // vconsole配置
│   ├── directive                                             // 指令
│   │   ├── index.js                                          // 阻止重复点击
│   ├── filter                                                // 过滤器
│   ├── plugins                                               // 指令
│   │   ├── hjDialog                                          // 函数式调用dialog
│   │   ├── qwReplace                                         // 
│   ├── router                                                // 路由
│   │   ├── index.js                                          // 注册vue-router
│   │   ├── localInfo.js                                      // 本地用户信息，本地起项目时绑定的用户
│   │   ├── routerHold.js                                     // 
│   ├── store                                                 // 本地存储
│   ├── styles                                                // 公共样式
│   ├── utils                                                 // 公共方法
│   ├── pages                                                 // 页面
│   |   ├── addCustomer                                       // 添加客户
│   |   ├── attendance                                        // 签到
│   |   ├── CustomerData                                      // 
│   |   ├── CustomerManage                                    // 客户列表
│   |   ├── CustomerTravel                                    // 客户旅程（弃用）
│   |   ├── Distribution                                      // 
│   |   ├── error                                             // 错误页面
│   |   ├── groupData                                         // 群数据
│   |   ├── hitOrder                                          // 撞单
│   |   ├── home                                              // 话术首页
│   |   ├── newCustomerDetail                                 // 客户详情
│   |   ├── Orders                                            // 商品订单
│   |   ├── poc                                               // poc（弃用）
│   |   ├── qa                                                // 问答库
│   |   ├── qwFissionStatus                                   // 企微列表状态
│   |   ├── sidebar                                           // 营销内容
│   |   ├── SOP                                               // sop
│   |   ├── speech                                            // 话术
│   |   ├── taskCenter                                        // 任务中心
│   |   ├── tranformCustomer                                  // 转移客户
│   |   ├── transfer                                          // 
│   |   ├── wechatMoments                                     // 朋友圈
│   |   ├── CustomerSelect                                    // 客户转联系人
│   |   ├── staticPage                                        // 静态页面（弃用）
│   |   ├── workbench                                         // 工作台
│   ├── App.vue                                               // 页面入口文件
│   ├── main.js                                               // 程序入口文件，加载各种公共组件
├── .env.xxxx                                                 // 配置环境变量，改变接口请求的地址前缀或者打包的baseurl
├── vue.config.js                                             // vue-cli相关配置
.
```