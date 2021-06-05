# HjHelpTip

常用于展示鼠标 hover 时的提示信息。

### 基础用法

::: demo 使用 `content` 属性来决定 `hover` 时的提示信息。由 `placement` 属性决定展示效果：`placement` 属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
```html
<template>
  <hj-help-tip :content="content" />
</template>
<script>
export default {
  data() {
    return {
      content: '这是一段提示信息文本'
    }
  }
}
</script>
:::  

### 替换icon

::: demo 使用 `icon` 来决定触发显示的 icon，可以是项目中所有的 [font icon](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=1846603&keyword=&project_type=&page=)。还可通过设置 `iconColor` 来决定 `icon` 的颜色。
```html
<template>
  <hj-help-tip 
    :content="content"
    icon="iconbianji21"
    iconColor="red"
  />
</template>
<script>
export default {
  data() {
    return {
      content: '这是一段提示信息文本'
    }
  }
}
</script>
:::  

### 默认显示

::: demo 如果想在页面初始化时显示提示信息，可以设置 `visibleFlag` 属性。
```html
<template>
  <hj-help-tip 
    :content="content"
    visible-flag
  />
</template>
<script>
export default {
  data() {
    return {
      content: '这是一段提示信息文本'
    }
  }
}
</script>
:::  

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
content | 提示信息 | String | - | -
placement | tip 的出现位置 | String | top/top-start/top-end/<br />bottom/bottom-start/bottom-end/<br />left/left-start/left-end/<br />right/right-start/right-end | bottom
icon | 触发 tip 显示的 icon | String | iconwenhao11 | 项目中所有的 [font icon](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.13&manage_type=myprojects&projectId=1846603&keyword=&project_type=&page=)
iconColor | 触发 tip 显示的 icon的颜色 | String | - | rgba(0, 0, 0, 0.12)
contentClassName | 自定义提示信息的class类名 | String | - | -
visibleFlag | 是否在初始化时显示提示信息 | Boolean | true/false | false