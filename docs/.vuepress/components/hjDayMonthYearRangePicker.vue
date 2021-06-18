<template>
  <div class="search-and-tag">
    <div class="query-block">
      <div class="search">
        <div class="query-item query-date-item">
          <template v-for="item in selectDateList">
            <div
              :key="item.type"
              class="f-csp date-item"
              :class="{'active-date-item': selectDateMode === item.type}"
              @click="selectDate(item.type)"
            >
              <span>{{ item.name }}</span>
              <div v-if="selectDateMode === item.type" class="active">
                {{ item.name }}
              </div>
            </div>
          </template>
        </div>
        <div class="query-item query-date-range-item">
          <el-date-picker
            v-if="['day', 'month'].includes(selectDateMode)"
            v-model="currentDate"
            :key="pickerKey"
            :clearable="false"
            :type="selectDateMode === 'day' ? 'daterange' : 'monthrange'"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            :format="selectDateMode === 'day' ? 'yyyy-MM-dd' : 'yyyy-MM'"
            @change="handlePickDate"
          ></el-date-picker>
          <div
            v-else-if="selectDateMode === 'week'"
            class="week-range"
          >
            <el-date-picker
              v-model="currentDate[0]"
              :key="pickerKey"
              :clearable="false"
              type="week"
              :picker-options="{ firstDayOfWeek: 1 }"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择开始周"
              format="yyyy 第 WW 周"
              @change="handlePickWeek($event, 'start')"
            >
            </el-date-picker>
            ~
            <el-date-picker
              v-model="currentDate[1]"
              :clearable="false"
              type="week"
              :picker-options="{ firstDayOfWeek: 1 }"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择结束周"
              format="yyyy 第 WW 周"
              @change="handlePickWeek($event, 'end')"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HjDayMonthYearRangePicker",
  data () {
    return {
      rangePickerObj: {
        _type: 'day',
        staffId: '',
        startDate: ''
      },
      selectDateList: [
        {
          type: "day",
          name: "日"
        },
        {
          type: "week",
          name: "周"
        },
        {
          type: "month",
          name: "月"
        }
      ],
      selectDateMode: "day",
      currentDate: []
    };
  },
  computed: {
    pickerKey () {
      return this.selectDateMode + new Date().getTime()
    }
  },
  created () {
    this.selectDate('day')
  },
  methods: {
    initTime (start, end) {
      const startText = this.dateFormat(start, 'yyyy-mm-dd') + ' 00:00:00'
      const endText = this.dateFormat(end, 'yyyy-mm-dd') + ' 23:59:59'
      this.currentDate = [startText, endText]
      this.rangePickerObj.startDate = startText
      this.rangePickerObj.endDate = endText
      this.$emit("updateData", this.rangePickerObj)
    },
    // 选择日周月
    selectDate (type) {
      const start = new Date()
      const end = new Date()

      this.selectDateMode = type;
      this.rangePickerObj._type = type;
      if (type === 'day') {
        // 默认限制 30 天内容
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      }
      if (type === 'week') {
        // 默认限制 10 周内容
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 63)
        start.setDate(start.getDate() - start.getDay() + 1)
        end.setDate(end.getDate() - end.getDay() + 1)
        end.setDate(end.getDate() + 6)
      }
      if (type === 'month') {
        // 默认限制 12 个月
        let startMonth = start.getMonth() - 10
        if (startMonth < 0) {
          start.setFullYear(start.getFullYear() - 1)
          startMonth = 11 + startMonth
        }
        start.setMonth(startMonth)
        start.setDate(1)
        end.setDate(1)
        end.setMonth(end.getMonth() + 1)
        end.setDate(end.getDate() - 1)
      }

      this.initTime(start, end)
    },
    // 选择具体日期
    handlePickDate (val) {
      if (this.selectDateMode === 'day') {
        this.initTime(val[0], val[1])
      } else if (this.selectDateMode === 'month') {
        const end = new Date(val[1])
        end.setDate(1)
        end.setMonth(end.getMonth() + 1)
        end.setDate(end.getDate() - 1)
        this.initTime(val[0], end)
      }
    },
    handlePickWeek (val, type) {
      const { currentDate } = this
      let start = currentDate[0]
      let end = currentDate[1]

      if (type === 'start') {
        start = new Date(val)
        start = start.setDate(start.getDate() - start.getDay() + 1)
      }
      if (type === 'end') {
        end = new Date(val)
        end.setDate(end.getDate() - end.getDay() + 1)
        end.setDate(end.getDate() + 6)
      }
      this.initTime(start, end)
    },
    dateFormat (datetime, formatStyle) {
      const _dateFormat = require('dateformat')
      let datDatetime = datetime;
      if (!datDatetime) {
        datDatetime = new Date();
      } else if (datetime.toString().length === 8) {
        // 兼容20171109这样的格式
        datDatetime = new Date(`${datetime.substr(0, 4)}-${datetime.substr(4, 2)}-${datetime.substr(6, 2)}`);
      }

      return _dateFormat(datetime, formatStyle);
    }
  }
};
</script>

<style lang="scss" scoped>
.query-block {
  display: flex;
  flex-wrap: wrap;
  > div {
    display: flex;
  }
  .search > div:not(:last-child) {
    margin-right: 10px;
  }
}
.query-date-item {
  display: flex;
  align-items: center;
  width: 140px;
  padding: 5px 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  > div {
    position: relative;
    flex-grow: 1;
    text-align: center;
    &:not(:last-child) {
      border-right: 1px solid #dcdfe6;
    }
  }
  .active-date-item {
    color: #ffffff;
    .active {
      position: absolute;
      top: -13px;
      left: 0;
      width: 46px;
      line-height: 44px;
      background: rgba(52, 112, 255, 1);
      box-shadow: 0px 4px 10px 0px rgba(52, 112, 255, 0.5);
      border-radius: 5px;
    }
  }
}

.query-date-range-item {
  z-index: 1;
  .week-range {
    display: flex;
    align-items: center;

    /deep/.el-date-editor {
      width: 170px;
      margin: 0 5px;
    }
  }
}

.tag {
  width: 100%;
  margin-top: 20px;

  .tag-item {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-right: 18px;
    }
    span:first-child {
      width: 15px;
      height: 11px;
      margin-right: 6px;
    }
  }
  .cancel {
    color: #b2b4c7;
  }
}
 .department-select {
        /deep/.el-select-dropdown{
          min-height: 270px;
          .el-select-dropdown__item{
            height: 100%;
            padding: 0;
          }
        }
      }
</style>
