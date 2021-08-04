# hjDefaultImage

表格中的图文

### 基础用法

普通使用

::: demo 
```html
<template>
  <div>
    <hj-default-image theme="light"></hj-default-image>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>
  <style>
.mb10 {
  margin-bottom: 10px;
}
.ml10 {
  margin-left: 10px;
}
</style>
:::


### 说明
标题描述超出隐藏

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
imageSource | 图片地址 | String | - | -
textImage | 文字作为图片 | String | - | ''
mode | 图片形状 | String | 【'circle' 圆形, 'square' 方形, 'rectangle' square】| square
iconType | 没有图片地址时icon | String | 【'image'图片, 'person'客户, 'company'企业】 | image
customIcon | 自定义icon | String | - | ''
theme | 主题 | String | 【'dark'灰色, 'light'亮色】 | dark
width | 图片宽 | String,Number | - | 40
height | 图片高 | String,Number | - | 40
iconSize | 图标字体大小（图片加载失败，没有图片，字作为图） | Number | [12,30] | 16
tipTitle | 提示（没有图片且没有textImage时显示）| String | - | -
isCrop | 是否裁剪(处理图片地址返回指定裁剪参数的地址) | Boolean | - | false
crop | 裁剪参数 | String | - | m40x40

### Events

事件名称|说明|回调参数
:-|:-|:-

### Methods
方法名|说明|参数
:-|:-|:-

### Slots
Name|说明
:-|:-