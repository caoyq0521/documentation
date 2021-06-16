# QwDialog

### 基础用法

::: demo 
```html
<template>
  <van-button round block type="info" @click="visible = true">弹框</van-button>
  <qw-dialog :visible.sync="visible">
    <div class="qw-dialog__demo">这是弹框内容</div>
  </qw-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: false
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
:-|:-|:-|:-|:-
visible | 是否显示 Dialog，支持 .sync 修饰符 | Boolean | - | false
closeOnClickOverlay |	是否在点击遮罩层后关闭弹窗 | Boolean | - | true
title |	弹窗标题 | String | - | 标题

### Events

参数|说明|参数
:-|:-|:-
open | 打开弹窗时触发 | -
close | 关闭弹窗时触发 | -