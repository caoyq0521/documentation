# BaseExpandCollapse

多行文本超出后隐藏。

### 基础用法

::: demo 默认超出 `7` 行后隐藏，如果需要可通过 `row` 去设置。
```html
<template>
  <base-expand-collapse :text="text" :row="2" />
</template>
<script>
export default {
  data() {
    return {
      text: '这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本这是一段重复文本'
    }
  }
}
</script>
:::  

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
text | 显示的文本内容 | String | - | -
row | 超出几行后隐藏 | Number | - | 7
openText | 超出后展开按钮文本 | String | - | 展开
closeText | 超出后隐藏按钮文本 | String | - | 收起