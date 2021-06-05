# HjSearchInput

基础的搜索组件。

::: tip
该输入框不允许输入 `@`、`<`、`>`、`*`、`%`、`&`、`?`、`#`、`(`、`)`、`!`、`;`、`"`、`'`符号。
:::

### 基础用法

::: demo 使用`isShowIcon`属性可禁用尾部搜索icon
```html
<template>
  <hj-search-input
    v-model="name"
  />
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
:::  

### 可清空

::: demo 使用`isClear`属性即可得到一个可清空的输入框
```html
<template>
  <hj-search-input
    v-model="name"
    is-clear
  />
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
:::  

### 输入长度限制

::: demo maxlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。
```html
<template>
  <hj-search-input
    v-model="name"
    maxlength="10"
    show-word-limit
    :is-show-icon="false"
  />
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>
:::  


### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
value/v-model | 绑定值 | string/number | — | —
placeholder | 输入框占位文本 | string | — | 请输入内容
maxlength | 最大输入长度 | String/Number | - | -
showWordLimit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean | - | false
isClear | 是否可清空 | Boolean | — | false
isShowIcon | 是否显示搜索icon ｜ Boolean | - | true
type | 类型 | string | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text

### Events

事件名称|说明|回调参数
:-|:-|:-
input | 在 Input 值改变时触发 | (value: string | number)
blur | 在 Input 失去焦点时触发 | -
handleEnter | 仅在输入框失去焦点或用户按下回车时触发 | (value: string | number)