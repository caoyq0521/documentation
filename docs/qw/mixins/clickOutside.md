# clickOutside

用来处理目标节点之外的点击事件。

::: tip
该混入接受配置信息，包括：`ref 给哪个元素绑定`、`method 触发事件`、`event 触发事件类型`

在 `mounted` 周期中挂载事件，在 `beforeDestroy` 周期中移除事件。
:::

### props

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
closeOnClickOutside | 是否启用点击外部关闭 | Boolean | - | true

### data

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
clickOutsideHandler | 点击到外部时候的处理程序 | Function | - | -