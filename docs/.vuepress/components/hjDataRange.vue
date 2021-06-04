<template>
  <div class="v-dateRange">
    <el-date-picker
      :style="styleClass"
      v-model="currentValue"
      type="daterange"
      popper-class="v-popper"
      :clearable="clearable"
      :size="size"
      @change="change()"
      value-format="yyyy-MM-dd"
      range-separator="~"
      :start-placeholder="placeholder ? placeholder : '开始日期'"
      :end-placeholder="placeholder ? placeholder : '结束日期'"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'HjDateRange',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    styleClass: {
      type: String,
      default: 'width: 215px'
    }
  },
  data: function () {
    return {
      vDom: {},
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              picker.$emit('pick', [start, start]);
            }
          },
          {
            text: '最近7天',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近一年',
            onClick (picker) {
              const end = new Date();
              const start = new Date();
              const year = new Date().getFullYear()
              let date = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 366 : 365
              date = (date - 1)
              start.setTime(start.getTime() - 3600 * 1000 * 24 * date);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },
      // clearable: false,
      size: "small",
      currentValue: [],
      time: new Date()
    }
  },
  watch: {
    value (newValue) {
      this.currentValue = newValue
    },
    currentValue (newValue, oldValue) {
      //console.log(this.currentValue);
    }
  },
  created () {
    this.currentValue = this.value
  },
  methods: {
    change () {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>

<style scoped>

</style>
