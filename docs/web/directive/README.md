# 指令

## v-clipboard

- 用法

  文字复制指令

- 示例

```js
  <el-button
    type="text"
    v-clipboard:copy="'复制的字符串'"
    v-clipboard:success="handleCopySuccess"
    v-clipboard:error="handleCopyFail"
    >
   复制
  </el-button>

    // handleCopySuccess 成功回调
    // handleCopyFail 失败回调
```

## debounceClick

- 说明

  防抖函数（防抖500ms）
   @/directive/debounceClick
- 用法

  value 绑定触发的函数

- 示例

```js
<template>
  <div v-debounceClick="fn">
    防抖点击
  </div>
</template>
<script>
import debounceClick from '@/directive/debounceClick'
export default {
  directives: { debounceClick },
  methods: {
    fn () {
      console.log(123);
    }
  }
}
</script>
```
  
## mousewheel

- 说明

  鼠标滚轮事件

  @/directive/mousewheel

- 用法

  value 绑定触发的函数

- 参数

  event(事件对象), normalized(滚动数据), scrollType (top | bottom) 

## v-no-data

- 说明

  判断内容为 '--',' -- ' 时设置颜色为灰色'#d7d7d7'，例如： <font color="#d7d7d7">--</font>，否则为css颜色

- 用法

  v-no-data

## v-no-padding

- 说明

  设置元素padding为0

- 用法

 v-no-padding

##  v-press

- 说明

  点击事件单位时间内只触发第一次，节流函数

- 用法

  v-press[:timeout]="fn"

## v-sticky

- 说明

  粘性布局指令
