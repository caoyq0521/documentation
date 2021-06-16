# QwSearch

### 基础用法

::: demo 
```html
<template>
  <qw-search v-model="searchValue" />
</template>
<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },
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
value / v-model |	绑定值 | String | - | -

### Events

参数|说明|参数
:-|:-|:-
input | 在 Input 值改变时触发 | value
search | 在 Input 值改变时触发 | value