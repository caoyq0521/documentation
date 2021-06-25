# ImageInfo

表格中的图文

### 效果图
<img :src="$withBase('/images/image-info.png')" alt=""> 

### 基础用法

普通使用

::: demo 
```html
<template>
  <div>
    <div class="mb10">
      显示微信图标：
      <el-switch v-model="showIcon"></el-switch>
    </div>
    <div class="mb10">
      输入描述：
      <el-input v-model="info"></el-input>
    </div>
     <div class="mb10">
      输入title tooltip：
      <el-input v-model="titleTip"></el-input>
    </div>
    <image-info
      image-source="http://dev.tanmarket.cn/fdfsServer/group1/M00/21/8F/rBHDtmAvb9-AH6mOAAGzs1M8Nqc462.jpg"
      title="标题"
      :info="info"
      :titleTip="titleTip"
      :hasWechatIcon="showIcon"
    ></image-info>
    <div class="mb10">使用slot</div>
    <image-info
      image-source="http://dev.tanmarket.cn/fdfsServer/group1/M00/21/8F/rBHDtmAvb9-AH6mOAAGzs1M8Nqc462.jpg"
      title="标题"
      :info="info"
    >
      <template #title>
        <a>slot标题</a>
      </template>
      <template #info>
        <span>简介1</span>
        <span class="ml10">简介2</span>
      </template>
    </image-info>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIcon: false,
      info:'描述',
      titleTip: ''
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
imageSource | 图片地址 | String | - | ''
imageText | 字体图片 | String | - | ''
title | 标题 | String | - | ''
hasInfo | 标题 | Boolean | - | true
info | 描述信息 | String | - | ''
hasWechatIcon | 是否有微信图标 | Boolean | - | true
titleTip | 标题后tooltip的内容(没有则不显示图标) | String | - | -
iconType | 没有图片时默认的icon | String | 'image', 'person', 'company' | person,传入imageSource时为image
### Events

事件名称|说明|回调参数
:-|:-|:-

### Methods
方法名|说明|参数
:-|:-|:-

### Slots
Name|说明
:-|:-
title | 标题插槽
info | 描述插槽
title-tip | 自定义标题后添加tooltip