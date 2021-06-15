# QwBack

导航栏

### 基础用法

::: demo 可以设置 `showComplete` 属性，用于控制完成按钮是否显示。
```html
<template>
  <qw-back />
</template>
:::  

### 自定义返回

可以设置 `noBack` 属性。设置后，点击返回按钮出触发 `goback` 事件可自定义返回事件。

::: demo 
```html
<template>
  <qw-back
    no-back
    @goback="handleGoBack"
  />
</template>
<script>
export default {
  methods: {
    handleGoBack() {
      this.$message('自定义返回事件！');
    }
  },
}
</script>
:::  


### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
title | 返回按钮文文本 | String | - | 返回
noBack | 返回是否是后退，默认 `go(-1)` | Boolean | - | false
completeName | 完成按钮文本 | String | - | 完成
showComplete | 是否显示完成按钮 | Boolean | - | false
isShowBack | 是否显示返回 | Boolean | - | true

### Events

事件名称|说明|回调参数
:-|:-|:-
complete | 点击完成按钮事件 | -
goback | 点击返回按钮事件，再配置了 `noBack` 后触发 | -