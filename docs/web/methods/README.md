# 公共方法

项目中现有的公共方法介绍以及使用方式。

## arrDataParse

- 用法

  将数组中的 `content` 字段转换为 JavaScript 对象。目前仅在 `群日历`模块中使用。

- 参数

  - {Array} arr 要处理的数组

- 返回值

  - {Array} 处理之后的数组

## arrDataStringify

- 用法

  将数组中的 `content` 字段转换为 JSON 字符串。目前仅在 `群日历`模块中使用。

- 参数

  - {Array} arr 要处理的数组

- 返回值

  - {Array} 处理之后的数组

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

## convertImgToBase64

- 用法

  通过图片地址将图片转为 base64 格式。

- 参数

  - {String} url 图片地址
  - {String} outputFormat 输出的图片类型，默认 `image/png`

- 返回值

  - {Promise} resolve(dataURL) 

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

## dataURLtoBlob

- 用法

  将base64转换为file

- 参数

  - {Object} dataurl base64格式的数据
  - {String} name 输出的文件名

- 返回值

  - {File} file

- 示例

```js
this.$tool.dataURLtoBlob(dataurl, 'test');
```

## dateFormat

- 用法

  格式化日期，依赖 [dateFormat](https://www.npmjs.com/package/dateformat)包扩展。

- 参数

  - {Any} datetime 时间，具体介绍查看[dateFormat](https://www.npmjs.com/package/dateformat)
  - {String} formatStyle 格式话类型，具体介绍查看[dateFormat](https://www.npmjs.com/package/dateformat)

- 返回值

  - {String} 格式话之后的日期

## dateFormatToWeek

- 用法

  格式话日期

  - 一天内：显示 `h:mm`
  - 两天内：显示 `昨天`
  - 五天内：显示 `星期几`
  - 大于五天：显示 `yyyy-MM-dd`

- 参数

  - {String} time 时间字符串

- 返回值

  - {String} 格式话之后的日期

- 示例

```js
this.$tool.dateFormatToWeek('2021-05-17 14:00:00')

// => 14:00

this.$tool.dateFormatToWeek('2021-05-16 14:00:00')

// => 昨天

this.$tool.dateFormatToWeek('2021-05-14 14:00:00')

// => 星期五

this.$tool.dateFormatToWeek('2021-04-14 14:00:00')

// => 2021/04/14
```

## dayWeekMonthFormat

- 用法

  日周月粒度格式话

- 参数

  - {String} datetime 时间
  - {Number} formatStyle 格式话类型
  ```js
  0：日
  1: 周
  2: 月
  ```

- 返回值

  - {String} 格式话之后的日期

- 示例

```js
this.$tool.dayWeekMonthFormat('2021-04-14 14:00:00', 0);

// => 2021-04-14

this.$tool.dayWeekMonthFormat('2021-04-14 14:00:00', 1);

// => 2021年 第15周

this.$tool.dayWeekMonthFormat('2021-04-14 14:00:00', 2);

// => 2021年04月
```

## debounce

- 用法

  防抖

- 参数

  - {Function} func 要防抖动的函数
  - {Number} wait 需要延迟的毫秒数

## deepClone

- 用法

  深度克隆

- 参数

  - {Object} target 克隆对象

- 返回值

  - {Object} 克隆之后的值

## deepCloneForSales

- 用法

  格式化部门人员

- 参数

  - {Object} obj 部门人员列表数据

- 返回值

  - {Object} 克隆之后的值

## downLoadMethods

- 用法

  流文件下载公共方法。

- 参数

  - {Blob} data 后台返回接口流文件数据
  - {String} fileName 下载之后的文件名

- 示例

```js
this.$tool.downLoadMethods(Blob, 'test.png');
```

## downLoadBlob

- 用法

  下载bolb 或 base64。

- 参数

  - {Blob} bolb bolb对象或base64
  - {String} fileName 下载之后的文件名

- 示例

```js
this.$tool.downLoadMethods(Blob, 'test.png');
```

## fraction

- 用法
  
  约分

- 参数

  - {Number} m 分子
  - {Number} n 分母

- 返回值

  - {Array} 

- 示例

```js
this.$tool.fraction(4, 2);

// => [2, 1]
```

## filterEmptyParams

- 用法

  过滤请求体中非空字段

- 参数

  - {Object} params 请求体

- 返回值

  - {Object} 过滤之后的对象

- 示例

```js
this.$tool.filterEmptyParams({
  a: '',
  b: 12
})

// => { b: 12 }
```

## fileToDataURL

- 用法

  将file转换为base64

- 参数

  - {Object} obj fileData

- 用法

  base64文件转为blob

- 参数

  - {String} base64Data

- 返回值

  - {Object} Blob

## findVNodeDownward

- 用法

  根据类名找下级节点

- 参数

  - {Object} context 父节点
  - {String} className 要查找类名
  - {Object} children 查找到的元素

- 返回值

  - {Object} children 查找到的元素

## formatDoubleNum

- 用法

  数字前置补0

- 参数

  - {Number|String} val 要处理的数字或数字字符串

- 返回值

  - {Number|String} 如果小于10，返回补0之后的字符串；如果大于10，返回数字本身

- 示例

```js
this.$tool.formatDoubleNum(4);

// => '04'

this.$tool.formatDoubleNum(12);

// => 12
```

## formatTime

## formToken

- 用法

  生成重复提交的随机串

- 返回

  - {String} 生成的随机串

## getPowerArr

- 用法

  用于获取登录人员的所有权限

- 示例

```js
this.$tool.getPowerArr();

// => [10501, ...]
```

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

## haveEmoji

- 用法

  判断文本内容中是否包含表情。

- 返回

  - {Boolean}

## haveSymbol

- 用法

  判断文本内容中是否包含特俗字符。

- 返回

  - {Boolean}

## hasRole

- 用法

  判断是否有该权限。

- 参数

  - {Number} id 权限id

- 返回

  - {Boolean}

## isJsonString

- 用法

  检测字符串是否为json串。

- 参数

  - {String} str 字符串

- 示例

```js
this.$tool.isJsonString('abc');

// => false

this.$tool.isJsonString('{"info": [{"a": 1,"b": 2}]}');

// => true
```

## isRepeat

- 用法

  判断数组中是否有重复

- 参数

  - {Array} arr

- 返回值

  - {Boolean}

## isSafari

- 用法

  判断当前浏览器是否为 `safari`

- 返回

  - {Boolean}

## jsonToNoEmpty

- 用法

  用于清除对象中空值的key。

- 参数

  - {Object} jsonParams

- 示例

```js
const params = {
  a: '',
  b: 2
}
this.$tool.jsonToNoEmpty(params);

// => { b: 2 }
```

## jsonToForm

- 用法

  json转from参数

- 参数

  - {Object} jsonParams 参数

- 返回值

  - {FormData}

## jsonToUrl

- 用法

  json转url参数

- 参数

  - {String} url 链接
  - {Object} jsonParams 参数

- 返回值

  - {String}

## keyUpFn

- 用法

  用于限制输入框不能输入 `特殊字符`。

- 参数

  - {Object} e Event
  - {String} obj 当前输入框的内容

- 示例

```js
this.$tool.keyUpFn($event, '12%3#4/');

// => 1234
```

## loadScript

- 用法

  加载某一地址的js文件

- 参数

  - {String} url js链接

## markedWords

- 用法

  根据关键词标红聊天内容。

- 参数

  - {String} content 文本内容
  - {String} keyword 关键词

- 返回

  - {String} 处理之后的字符串

## matchDomImgSrc

- 用法

  匹配img标签src属性内容。

- 参数

  - {String} src 带img标签的字符串

- 返回值

  - {String} 匹配到的图片地址

## noncestr

- 用法

  生成随机数

- 参数

  - {Number} range 生成几位随机数
  - {String} prefix 随机数前置

- 返回

  - {String} 生成的随机数

- 示例

```js
this.$tool.noncestr(4, 'test')

// => testCdyF
```

## rangeDate

- 用法

  获取到现在时间的时间数组。

- 参数

  - {Number} num 天数，默认 `7`
  - {Number} type，默认 `1`
    ```js
    1: yyyy-MM-dd
    2: yyyy-MM-dd hh:mm
    ```

- 返回

  - {Array}

- 示例

```js
this.$tool.rangeDate();

// => ["2021-05-11", "2021-05-17"]

this.$tool.rangeDate(6, 2)

// => ["2021-05-12 00:00:00", "2021-05-17 23:59:59"]
```

## scrollTop

- 用法

  处理DOM滚动。

- 参数

  - {DOM} el 滚动的元素
  - {Number} from 从什么位置开始
  - {Number} to 滚到什么位置
  - {Number} duration 时间
  - {Function} endCallback 结束后的回调

## setWatermark

- 用法

  设置水印，在 `views/layout/layout.vue`已设置，不需要再次使用。

## ueditorBeforeInit

- 用法

  `vue-quill-editor`组件前置事件，用于注入 `秀米图文消息助手`，以集成到富文本组件中，不需要单独使用。

## secondFormat

- 用法

  根据秒数转化为 `d天h小时m分钟s秒`时间格式。

- 参数

  - `{Number}` value 秒数

- 示例

```js
this.$tool.secondFormat(5000000);

// => 57天20小时53分钟20秒
```
## sliceDotTitle

## stopBubble

- 用法

  阻止冒泡事件。

- 参数

  - {Element} e $event

## stopDefault

- 用法

  阻止浏览器的默认行为

- 参数

  - {Element} e $event

## sopDataParse

- 用法

  转换方法，将对象 `details`字段中的 `content` 字段转换为 JavaScript 对象。目前仅 `sop` 模块中使用

- 参数

  - {Object} data 要处理的数据

- 返回值

  - {Object} 处理之后的数据

## sopDataStringify

- 用法

  转换方法，将对象 `details`字段中的 `content` 字段转换为 JSON 字符串。目前仅 `sop` 模块中使用

- 参数

  - {Object} data 要处理的数据

- 返回值

  - {Object} 处理之后的数据

## timeFormat

请使用[dateFormat](#dateformat)方法

## urlFormat

请使用 [jsonToUrl](#jsontourl)

## base64ToFile

- 用法

  base64文件转为File

- 参数
  
  - {String} base64Data base数据
  - {String} fileName 文件名

- 返回值
  
  - {File} 返回文件类型数据

## formatBytes

- 用法

  字节转实际大小

- 参数

  - {Number} a 字节数
  - {Number} b 保留小数位数默认2位
  
- 返回值
  
  - {String} 友好显示的文件大小单位 ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

## getBytesCount

- 用法

  获取字符串长度，汉字所占长度为2

- 参数

  - {String} str 字符串

- 返回值

  - {Number} 字符串长度

## dataToString

- 用法

  转换时间格式 2020-02-02 11:11:11 => 20200202

- 参数

  - {String} time 字符串

- 返回值

  - {String} 字符串

## 类型判断

- 用法

  is + 'String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean' 判断类型

- 参数

  - {any} obj 任意类型

- 返回值

  - {Boolean} 

- 示例

```js
  this.$tool.isNumber(5000000);
  
// => true
```