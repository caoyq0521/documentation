# appletsUpload 营销内容上传组件

### 基础用法

::: demo
```html
<template>
   <applets-upload
      :images="ueditorImgList"
      :coverImageUrl="cover"
      @choice="handleChoosePic"
      @file-success="handleSuccess"
    >
    </applets-upload>
</template>
<script>
export default {
  data() {
    return {
      ueditorImgList: [],
      cover:'https://img01.yzcdn.cn/vant/leaf.jpg'
    }
  },
  methods: {
     // 从内容中选取图片
    handleChoosePic (url) {
      this.articleInfo.cover = url;
    },
    handleSuccess (response, file, fileList) {
      this.articleInfo.cover = response;
    },
  },
}
</script>

:::  

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
images | 可选的图片组 | Array | - | []
coverImageUrl | 当前 | String | - | ''

### Events

参数|说明|参数
:-|:-|:-
handleChoosePic | 选择某张图片的时候触发 | 选取的图片url
handleSuccess | 上传图片成功后触发 | (response:图片url,file:文件信息，fileList:文件列表)
