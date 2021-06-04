# HjTag

`客户`以及`营销内容`功能下各个模块选择标签。

### 效果图

::: tip
因该组件涉及到项目部分接口，所以这里只放了两张效果图。
:::

<img :src="$withBase('/images/hj-tag-2.png')" alt="foo"> 
<img :src="$withBase('/images/hj-tag-1.png')" alt="foo"> 

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
tagType | 标签模块类型，具体见下表 | Number | 1/2/3 | 2
currents | 当前选择的标签值 | Array | - | -
showAddBtn | 是否可添加标签 | Boolean | - | false

### tagType

参数|说明
:-|:-
1 | 个微版客户标签
2 | 内容标签
3 | 高级版客户标签

### Events

事件名称|说明|回调参数
:-|:-|:-
add | 创建标签触发事件 | -
choice | 选择标签时触发事件 | 当前标签数据
tagSelect | 点击确认按钮触发事件 | 选中的所有标签