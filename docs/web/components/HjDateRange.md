# HjDataRange

带快捷选项的时间范围选择器。

### 基础用法

::: demo
```html
<template>
  <hj-data-range
    :value="value"
  />
</template>
<script>
export default {
  data() {
    return {
      value: []
    }
  }
}
</script>
:::  


### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
value / v-model | 绑定值 | Array | - | -
placeholder | 非范围选择时的占位内容 | String | 开始日期/结束日期 | -
clearable | 是否显示清除按钮 | Boolean | - | false
styleClass | 自定义选择器外框样式 | String | width: 215px | -

### Events

事件名称|说明|回调参数
:-|:-|:-
change | 用户确认选定的值时触发 | 组件绑定值