# HjList

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

::: warning
代码暂未合到dev分支，如果需要可使用 `@/views/newCustomerDetail/components/CustomerDetailList` 组件。
:::

::: tip
使用 Element InfiniteScroll 解决 Vant list组件在页面头部固定或者在页面某一区域布局中一直触发加载的问题。
:::

具体例子参考 [vant list](https://vant-contrib.gitee.io/vant/#/zh-CN/list)

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
v-model | 是否处于加载状态，加载过程中不触发load事件 | Boolean | - | false
finished | 是否已加载完成，加载完成后不再触发load事件 | Boolean | - | false
error | 是否加载失败 | Boolean | - | false
delay | 节流时延，单位为ms | Number | - | 200
distance | 触发加载的距离阈值，单位为px | Number | - | 50
immediate | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 | Boolean | - | true

### Events

事件名称|说明|回调参数
:-|:-|:-
load | 滚动条与底部距离小于 distance 时触发 | -