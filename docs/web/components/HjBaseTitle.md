# HjBaseTitle 标题

基本的标题组件

### 基础用法

::: demo 可以设置 `titleSize` 属性，用于控制标题字体大小。
```html
<template>
   <hj-base-title :title="title" />
</template>
<script>
export default {
  data() {
    return {
      title: '这是一段标题文本'
    }
  }
}
</script>
:::  

### 必填提示

::: demo 默认情况下 `*` 不显示，如果需要，可以使用 `isRequired`属性。它接受一个Boolean，默认为false，设置为true即为启用。
```html
<template>
   <hj-base-title 
    :title="title"
    is-required
  />
</template>
<script>
export default {
  data() {
    return {
      title: '这是一段标题文本'
    }
  }
}
</script>
::: 

### 带提示信息的标题

::: demo tipsInBrackets属性可以将提示信息放在 `()` 中。它接受一个Boolean，默认为false，设置为true即为启用；同时可以设置 `titleSize` 属性，用于控制提示信息字体大小。
```html
<template>
   <hj-base-title 
    :title="title" 
    :tips="tips"
    tips-in-brackets
  />
</template>
<script>
export default {
  data() {
    return {
      title: '这是一段标题文本',
      tips: '这是一段提示信息文本'
    }
  }
}
</script>
:::  

### 提示信息主题

HjBaseTitle组件为提示信息提供了两个不同的主题：`normal`和`danger`。

::: demo 通过设置tipsTheme属性来改变主题，默认为normal。
```html
<template>
  <el-radio-group v-model="value" style="margin-bottom: 20px;">
    <el-radio-button :label="false">normal</el-radio-button>
    <el-radio-button :label="true">danger</el-radio-button>
  </el-radio-group>
  <hj-base-title 
    :title="title" 
    :tips="tips"
    tips-in-brackets
    :tips-theme="tipsTheme"
  />
</template>
<script>
export default {
  data() {
    return {
      value: true,
      title: '这是一段标题文本',
      tips: '这是一段提示信息文本'
    }
  },
  computed: {
    tipsTheme() {
      return this.value ? 'danger' : 'normal' 
    }
  }
}
</script>
:::

### 带有背景色的标题

::: demo 通过配置 `withBackgroundColor` 来决定是否带有背景色。背景色默认为 `#F4F4F6`，可以通过 `backgroundColor`来设置，还可通过设置 `radius` 属性来决定背景的圆角大小。
```html
<template>
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
    <span>背景色</span>
    <el-color-picker v-model="color1" @change="handleColorChange"></el-color-picker>
  </div>
  <hj-base-title 
    :title="title" 
    :tips="tips"
    tips-in-brackets
    with-background-color
    :background-color="color1"
  />
</template>
<script>
export default {
  data() {
    return {
      color1: '#F4F4F6',
      title: '这是一段标题文本',
      tips: '这是一段提示信息文本'
    }
  }
}
</script>
:::

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
title | 标题 | String | - | 标题
titleSize | 标题文字大小。最小为`14` | String/Number | - | 16
isRequired | 是否为必填。会在标题前显示红色 `*` 号 | Boolean | - | false
showOptional | 是否显示 `(选填)` 提示 | Boolean | - | false
tips | 提示信息 | String | - | -
tipsSize | 提示信息自字体大小。<br >字体大小必须 大于等于 `14` 并且 小于 标题字体大小 | String/Number | - | 14
tipsInBrackets | 提示信息是否显示在 `括号` 中 | Boolean | - | false
tipsTheme | 提示信息主题样式 | String | normal/danger | normal
withBackgroundColor | 标题内容是否带有背景色 | Boolean | - | false
backgroundColor | 背景色，在 `withBackgroundColor` 为 true 是生效 | String | - | #F4F4F6
radius | 背景圆角，在 `withBackgroundColor` 为 true 是生效 | String/Number | - | 5