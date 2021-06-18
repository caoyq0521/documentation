# HjDayMonthYearRangePicker

`日`、`周`、`月`时间范围选择器。

### 基础用法

::: demo
```html
<template>
  <div 
    v-if="type"
    class="hj-day-month-year-range-picker__demo"
  >
    <div>选择类型：{{ type }}</div>
    <div>开始时间：{{ info.startDate }}</div>
    <div>结束时间：{{ info.endDate }}</div>
  </div>
  <hj-day-month-year-range-picker
    @updateData="handleUpdateData"
  />
</template>
<script>
const TYPES = {
  day: '日',
  week: '周',
  month: '月',
}
export default {
  data() {
    return {
      info: {}
    }
  },
  computed: {
    type() {
      const {_type = ''} = this.info;
      if(!_type) return '';
      return TYPES[_type];
    }
  },
  methods: {
    handleUpdateData(range) {
      this.info = range;
    }
  },
}
</script>
:::  

### Events

事件名称|说明|回调参数
:-|:-|:-
updateData | 用户选择的时间范围 | 时间范围