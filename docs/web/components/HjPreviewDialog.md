# HjPreviewDialog

预览弹框组件。

### 基础用法

::: demo 通常配合 `previewPhone` 使用 (注：`previewPhone`不是全局组件需单独引用，位置：`@/components/common`)，用于手机端预览展示。
```html
<template>
  <div>
    <el-button
      type="primary" 
      size="default" 
      @click="previewVisible = true"
    >
      查看预览弹框
    </el-button>
    <hj-preview-dialog
      :visible.sync="previewVisible"
    >
      <preview-phone />
    </hj-preview-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      previewVisible: false
    }
  }
}
</script>
:::  

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
width | 弹框的宽度 | String | - | 514px
visible | 是否显示弹框，支持 .sync 修饰符 | Boolean | - | false