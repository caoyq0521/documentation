# AdaptiveInput

根据配置渲染不同的表单组件。

:::warning

一、该组件适配不适配 PC 端视口。

二、无论何种模式，均不支持 slot 插槽功能

三、已支持`v-model`写法，无需监听任何事件
:::

### 基础用法

:::demo

```vue
<template>
  <div>
    <adaptive-input
      label="姓名"
      required
      :mode="1"
      v-model="form.name"
      placeholder="单行文本"
    />
    <adaptive-input
      v-model="form.gender"
      label="性别"
      :mode="2"
      :options="genderOpts"
      placeholder="单选"
    />
    <adaptive-input
      label="爱好"
      :mode="6"
      v-model="form.hobbies"
      :options="hobbiesOpts"
      placeholder="多选"
    />
    <adaptive-input
      label="生日"
      :mode="3"
      v-model="form.birthday"
      placeholder="日期"
    />
    <adaptive-input
      label="身高"
      :mode="4"
      v-model="form.height"
      placeholder="数值"
    />
    <adaptive-input
      label="最后一次登录"
      :mode="7"
      v-model="form.lastlogin"
      placeholder="日期时间"
    />
    <adaptive-input
      label="自我介绍"
      :mode="5"
      v-model="form.resume"
      placeholder="多行文本"
    />
    <adaptive-input label="无mode" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        gender: 0,
        hobbies: [],
        birthday: "",
        resume: "",
        height: "",
        lastlogin: "",
      },
      genderOpts: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ],
      hobbiesOpts: [
        { label: "吃饭", value: 1 },
        { label: "睡觉", value: 2 },
        { label: "打豆豆", value: 3 },
      ],
    };
  },
};
</script>
```

:::

### 通用属性

| 参数        | 说明                        | 类型    | 可选值                                                                               | 默认值 | 是否必填 |
| ----------- | --------------------------- | ------- | ------------------------------------------------------------------------------------ | ------ | -------- |
| mode        | 展示模式,控制组件的展示方式 | Number  | 1 单行文本<br/>2 单选<br/>3 日期<br/>4 数值<br/>5 多行文本<br/>6 多选<br/>7 日期时间 | --     | 是       |
| placeholder | 无内容占位                  | String  |                                                                                      |        | 否       |
| value       | 默认值                      | --      |                                                                                      |        | 是       |
| label       | 标签内容                    | String  |                                                                                      |        | 否       |
| disabled    | 禁用组件                    | Boolean |                                                                                      |        | 否       |

### 单行文本与多行文本属性

单行文本与多行文本模式下除通用属性外，可接受除以下属性外的所有`van-field`的属性。

:::danger
不支持的`van-field`属性：`center`
:::

:::tip
单行文本与多行文本基于`AdaptInput`组件实现，该组件可独立使用，独立使用时与`van-field`表现一致。但不可接受`mode`参数。
:::

### 单选与多选属性

| 参数        | 说明                     | 类型          | 可选值 | 默认值 | 是否必填 |
| ----------- | ------------------------ | ------------- | ------ | ------ | -------- |
| value       | 默认值                   | String/Number |        |        | 是       |
| options     | 选项                     | Array         |        | []     | 是       |
| optionLabel | 指定选项数组中的展示字段 | String        |        | label  | 否       |
| optionValue | 指定选项数组中的值字段   | String        |        | value  | 否       |

### 日期、日期时间属性

:::tip
日期、日期时间模式下接受`van-datetime-picker`的所有参数。

日期、日期时间基于 `AdaptDate`组件实现，该组件可独立使用，独立使用时可指定`type`，支持`van-datetime-picker`的所有参数。

`AdaptiveInput`组件的`mode 3`对应`AdaptDate`组件的`date`类型。其余类型因无对应 mode，暂未在`AdaptiveInput`组件实现。如需使用其余 type 请独立使用`AdaptDate`组件。
:::

| 参数  | 说明                                    | 类型   | 可选值                                                       | 默认值 | 是否必填 |
| ----- | --------------------------------------- | ------ | ------------------------------------------------------------ | ------ | -------- |
| value | 默认值,该值因 type 不同而不同，详见下表 | String |                                                              |        | 是       |
| type  | 独立使用时可指定组件类型                | String | `date` `time` `year-month` `month-day` `datehour` `datetime` | `date` | 否       |

#### type 与 value 对应关系

:::tip
所有时间均为 24 小时制
:::

| type 类型  | 说明       | 对应 value 格式  |
| ---------- | ---------- | ---------------- |
| date       | 日期       | YYYY-MM-DD       |
| time       | 时间       | HH:mm            |
| year-month | 年月       | YYYY-MM          |
| month-day  | 月日       | MM-DD            |
| datehour   | 年月日时   | YYYY-MM-DD HH    |
| datetime   | 年月日时分 | YYYY-MM-DD HH:mm |
