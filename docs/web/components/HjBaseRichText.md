# HjBaseRichText

一个简单的编辑工具，主要用于微信推送消息编辑；
::: tip
组件位置：`@/views/fissionActivity/components`，之后会放到全局。
:::

### 基础用法

::: demo 默认展示所有工具，通过设置 `toolbars` 去自定义工具栏内容。
```html
<template>
  <hj-base-rich-text />
</template>
:::  

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
toolbars | 工具栏，具体见下表 | Array | - | 全部工具
height | 编辑区域高度 | Number/String | - | 400
color | 输入文本的颜色 | String | - | #333333
content | 初始化内容 | String  | - | -
disabled | 是否禁用 | Boolean | - | false
placeholder | 编辑区域占位文本 | String | - | 请输入内容
maxlength | 最大输入长度 | Number | - | Infinity
showWordLimit | 是否显示输入字数统计 | Boolean | - | false
trigger | 带弹出框工具的触发方式（工具 `具体trigger` 会覆盖 `trigger` 参数的值） | String | click/foucs/hover/manual | hover
emoticonsTrigger | 表情工具 弹出框触发方式 | String | click/foucs/hover/manual | click
rewardRemainingTrigger | 库存剩余工具 弹出框触发方式 | String | click/foucs/hover/manual | -
rewardTrigger | 奖品工具 弹出框触发方式 | String | click/foucs/hover/manual | -
achieveRequirementTrigger | 达成条件需要人数工具 弹出框触发方式 | String | click/foucs/hover/manual | -
achieveDistanceTrigger | 未完成任务量工具 弹出框触发方式 | String | click/foucs/hover/manual | -

### Events

事件名称|说明|回调参数
:-|:-|:-
change | 文本内容变更事件 | 共两个参数，依次是：html内容、text内容
edit | 当前操作的是哪个工具（仅先可再编辑工具） | 共两个参数，依次是：当前工具element信息、工具name

### toolbars

name|介绍
:-|:-
achieveDistance | 未完成任务量
achieveRequirement | 达成条件需要人数
achievement | 已完成任务量
boosterNickname | 助力好友昵称
checkTheHelpOfFriends | 戳此查看好友助力情况
emoticons | 表情
leaderboard | 排行榜
link | 链接
miniProgram | 小程序
nickname | 用户昵称
reward | 奖品
rewardRemaining | 库存剩余
activityName | 活动名称