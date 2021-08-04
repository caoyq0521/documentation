# rankingInit

活动氛围设置

### 效果图
<img :src="$withBase('/images/rankin-init.png')" alt=""> 

### 基础用法

```html
<top-data-default :priceInfo.sync="priceInfo" ref="topDataDefault" v-if="open">

</top-data-default>
```

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
priceInfo | 通过。sync实现双向绑定的排行数据 | Array | - | []
default | 一键填充自定义数据源 | Array | - | ./defaultData.js
num | 排行榜数量

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
left | 头像昵称：左边的插槽 参数为 { data }
right | 头像昵称：右边的插槽 参数为 { data }