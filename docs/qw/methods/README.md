# 公共方法

项目中现有的公共方法介绍以及使用方式。

## blobToDataURI

- 用法

  blob转为base64。

- 参数

  - {Object} blob blob类型文件
  - {Function} callback 回调

## blobToFile

- 用法

  blob转为file类型。

- 参数

  - {Object} blob blob类型文件
  - {String} fileName 文件名

- 返回

  - {Object} file

## base64ToBlob

- 用法 

  base64文件转为blob

- 参数

  - {String} base64Data base64格式的数据

- 返回值

  - {Blob} 转化之后Blob格式的数据

## chatDataFormat

- 用法

  聊天记录格式化，主要是将 `音频`、`视频` 、`表情`和`图片`协议是 `https`的地址替换以及 `JSON.parse(sentence)` 字段用于聊天内容渲染。

- 参数

  - {String} val 聊天数据

- 返回值

  - {Array} 格式话之后的数据

## createH5PreviewUrl

- 用法

  生成H5预览链接

- 参数

  - {Object} item 数据信息
  - {Number} type 模块类型
    ```js
    1: 图片,
    2: 视频,
    3: 早报,
    4: 名片,
    5: 案例,
    6: 宣传册,
    7: 文件,
    8: 表单,
    9: 小站,
    10: 海报,
    11: 朋友圈,
    12: 产品,
    13: 抽奖详情,
    14: 抽奖,
    15: 商品
    ```
  - {Number} hjType 默认为2

    ```js
    1: h5需要认证
    2: 预览
    3: 移动端预览
    4: 草稿预览
    5: 表单模板预览
    6: 预览不能编辑
    7: 预览不展示头部信息
    ```

- 返回值

  - {String} url 生成的H5预览链接地址

## createH5ShareUrl

- 用法

  生成H5分享链接

- 参数

  - {Object} item 数据信息
  - {Number} type 模块类型（同 [createH5PreviewUrl](#createh5previewurl) type）

- 返回值

  - {String} url 生成的H5分享链接地址

## coverImage

- 用法

  通过图片地址换取缩略图地址。

- 参数

  - {String} url 原始链接
  - {String} type 类型（c,m,t,w）m跟微信分享的效果是一样的，默认为 `m`
  - {Number} width 宽度，默认为 `240`
  - {Number} height 高度，默认为 `240`
  - {String} file 文件的格式

- 返回值

  - {String} 生成的缩略图地址

- 示例

```js
this.$tool.coverImage(url, 'm', 300, 300, 'png');

// => url!m300X300.png
```

## deCoding

- 用法

  解析 `yhqEmoji` 组件的编辑内容，主要是处理 `emoji` 图片。

- 参数

  - {String} value 富文本中的内容

- 返回值

  - {String} 处理之后的内容

## deepClone

- 用法

  深度克隆

- 参数

  - {Object} target 克隆对象

- 返回值

  - {Object} 克隆之后的值

## downLoadMethods

- 用法

  流文件下载公共方法。

- 参数

  - {Blob} data 流文件数据
  - {String} fileName 下载之后的文件名

- 示例

```js
this.$tool.downLoadMethods(Blob, 'test.png');
```

## encrypt

- 用法

  DOM元素所有滑动

- 参数

  - {String} value 要加密的电话

- 返回值

  - {String} 加密之后的电话

## findVNodeDownward

- 用法

  根据类名找下级节点

- 参数

  - {Object} context 父节点
  - {String} className 要查找类名
  - {Object} children 查找到的元素

- 返回值

  - {Object} children 查找到的元素

## formatBytes

- 用法

  字节转实际大小。

- 参数

  - {Number} a 字节数
  - {Number} b 保留小数位数 默认 2位

- 返回值

  - {String} String

## formatDate

- 用法

  格式化时间为时间轴。

- 参数

  - {Date|String} date 时间

- 返回值

  - {String}

## getContext

- 用法
  
  打开会话。

::: tip
Mac设备不支持该方法。
:::

- 参数

  - {String} chatid 会话id

  - {String} chatname 会话名称。单聊时该参数传入空字符串””即可

## getNickName

- 用法

  获取姓或者前两个英文字母。

- 参数

  - {String} name 姓名

- 返回

  - {String}

## getServerDate

- 用法

  获取服务器时间

- 返回值

  - {Date} 当前浏览器时间

- 示例

```js
this.$tool.getServerDate();

// => Mon May 17 2021 19:24:32 GMT+0800 (中国标准时间
```

## getLocation

- 用法
  
  获取定位信息。

- 返回值

  - {Promise} 定位信息


## getCurExternalContact

- 用法
  
  获取当前客户ID。

- 返回值

  - {Promise} 用户id

## getCurExternalChat

- 用法
  
  获取当前客户群的群ID。

- 返回值

  - {Promise} 群id

## getQueryObj

- 用法

  获取url中的所有参数。

- 参数

  - {String} url 链接

- 返回值

  - {Object} 所有参数


## headerCorpid

- 用法

  获取公司的 `corpid`。

- 返回值

  - {String} 公司 `corpid`

## headerDeviceNum

- 用法

  获取设置在请求头上的device_num

- 返回值

  {String} device_num

## headerSign

- 用法

  获取设置在请求头上的sign

- 参数

  {Number} timestampValue 时间戳

- 返回值

  {String} 加密之后的sign值

## headerToken

- 用法

  获取设置在请求头上的Authorization

- 返回值

  {String} authToken

## isAndroid

- 用法

  是否是Android设备。

- 返回值

  - {Boolean}

## isIPhone

- 用法

  是否是iphone手机。

- 返回值

  - {Boolean}

## isIos

- 用法

  是否是ios设备。

- 返回值

  - {Boolean}

## isLocalhost

- 用法

  是否是本地起的项目。

- 返回值

  - {Boolean}

## isMobile

- 用法

  是否是手机端设备，包括 `安卓`、`iphone`、`塞班`、`WP`、`iPod`。

- 返回值

  - {Boolean}


## isMac

- 用法

  是否是Mac电脑。

- 返回值

  - {Boolean}

## jsonToForm

- 用法

  json转from参数

- 参数

  - {Object} jsonParams 参数

- 返回值

  - {FormData}

## judgeArrayEqual

- 用法

  判断两个数组是否全等。

- 参数

  - {Array} array1 数组1
  - {Array} array2 数组2

- 返回值

  - {Boolean}

## onMenuShareAppMessage

- 用法
  
  分享朋友圈。

- 参数

  - {Object} 分享内容信息，包含：`title：标题`、`link：地址`、`fileUrl：封面图地址`。

## openAddCustomer

- 用法
  
  打开添加客户页面。


## openUserProfile

- 用法
  
  打开个人信息页。

- 参数

  - {Number} type 客户类型
  ```js
  1：企业成员
  2：外部联系人
  ```

  - {String} userid 客户id


## openEnterpriseChat

- 用法
  
  获得用户是从哪个入口打开页面。

::: tip
进入H5页面的入口类型，目前有normal、contact_profile、single_chat_tools、group_chat_tools

contact_profile	从联系人详情进入

single_chat_tools	从单聊会话的工具栏进入

group_chat_tools	从群聊会话的工具栏进入

normal	除以上场景之外进入，例如工作台，聊天会话等
:::

- 返回值

  - {Promise} 入口类型

## offDomEvent

- 用法

  移除DOM事件。

- 参数

  - {Element} target 绑定事件的元素
  - {String} event 事件名
  - {Function} handler 事件

## onDomEvent

- 用法

  添加DOM事件。

- 参数

  - {Element} target 绑定事件的元素
  - {String} event 事件名
  - {Function} handler 事件
  - {Boolean} passive 优化性能

## pointShareEvent

- 用法

  事件上报。

- 参数

  - {Object} obj 上报的信息

## paramFilter

## replaceRichtext

- 用法

  剔除富文本内的标签。

- 参数

  - {String} content 富文本内容
  - {Reg} reg 正则，默认 `/<[^>]+>|&[^>]+;/g`

- 返回

  - {String}

## setHtmlElementStyle

- 用法

  设置 `html` 的 `fontSize` 属性，用于控制在工作台中的页面显示。

- 参数

  - {Number} deviceWidth 页面宽度

## scrollLeftTo

- 用法

  DOM元素所有滑动

- 参数

  - {Element} scroller 滚动的元素
  - {Number}  to 滚动到什么位置
  - {Number}  duration 过渡时间

## scrollTop

- 用法

  处理DOM滚动。

- 参数

  - {DOM} el 滚动的元素
  - {Number} from 从什么位置开始
  - {Number} to 滚到什么位置
  - {Number} duration 时间
  - {Function} endCallback 结束后的回调

## startLive

- 用法
  
  打开直播。

- 参数

  - {String} id 直播间id


## sendChatMessage

- 用法
  
  [详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/92676)。

## wxShare

- 用法

  自定义转发到 `微信` `朋友圈`，[详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/90523)。

- 参数

  - {String} title 标题
  - {String} desc 描述
  - {String} desc 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  - {String} imgUrl 图片地址

## setAgentConfig

- 用法

  通过agentConfig注入应用的权限，[详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/94325)。

## setAgentConfig

- 用法

  通过agentConfig注入应用的权限，[详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/94325)。

## setAgentConfig

- 用法

  通过agentConfig注入应用的权限，[详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/94325)。

## setWxInit

- 用法

  注入权限验证配置，[详细介绍](https://work.weixin.qq.com/api/doc/90001/90144/90547)。


## urlFormat

请使用 [jsonToUrl](#jsontourl)

## sliceDot

- 用法

  文本超出限制后截取并加上...。


- 参数

  - {String} value 文本
  - {Number} arg 超出多少字处理

- 返回值

  {String} 处理之后的文本

## uploadFile

- 用法

  上传文件。

- 参数

  - {File} file 上传的文件

- 返回值

  - {Promise} 上传之后后台返回的信息