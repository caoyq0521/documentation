# HjSwitchTable

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

::: demo 
```html
<template>
  <hj-switch-table />
</template>
:::

### 线状

::: demo 
```html
<template>
  <hj-switch-table
    type="underline"
  />
</template>
:::

### 路由保持状态

tab可以根据传入的路由地址`保持`当前tab页面，防止`刷新后`返回第一个tab。

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
type | 展示模式 | String | card/underline | card
keepStatus | 是否根据路由保持状态 | Boolean | - | false
options | tab项内容，必须包含`key`和`title` | Array | - | [{key: 1, title: '个人文章'}, {key: 2, title: '企业文章'}]
defaultKey | 当前默认选中的项 | Number/String | - | 0
emitType | emit事件的类型，会根据类型返回不同的数据，具体见下表 | String | key/origin | key
isWatchRoute | 是否监听路由变化 该组件嵌套是请设置为false | Boolean | - | false

::: warning
如果使用了`keepStatus`，则 `options`中的每一项必须包含 `path` 属性。
:::

### emitType

类型|说明
:-|:-
key | 返回 key 值
origin | 返回原始字段

### Events

事件名称|说明|回调参数
:-|:-|:-
switchTableChange | tab点击事件 | 根据 `emitType` 返回不同的参数