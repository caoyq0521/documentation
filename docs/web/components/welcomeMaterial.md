# rankingInit

欢迎语素材

### 效果图
<img :src="$withBase('/images/welcome-material.png')" alt=""> 

### 基础用法

```html
 <welcome-tem :materialList.sync="welcomeMsgRules"></welcome-tem>
```
### 说明

组件依赖
> import contentList from "@/views/customerFollowUp/customerSop/components/wordsContent/contentList";
  import addUpload from '@/views/customerFollowUp/customerSop/components/wordsContent/actions/addUpload'

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
materialList | 通过。sync实现双向绑定的素材数据 | Array | - | []
options | 展示的素材功能按钮 | Array | [1-6] 1：文本，2：图片，3：链接，4：视频，5：文件，6：小程序 | [2,3,6]  


### Events

事件名称|说明|回调参数
:-|:-|:-

### Methods
方法名|说明|参数
:-|:-|:-

mokeData 一键填充数据 | 
### Slots
Name|说明
:-|:-
