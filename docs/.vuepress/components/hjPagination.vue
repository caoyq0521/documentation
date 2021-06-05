<template>
  <div class="ng-pagination">
    <slot></slot>
    <div class="total-text">
      共 {{ pagination.totalCount }} 条&nbsp;
    </div>
    <div class="pagination-div">
      <span
        class="pagination-angle"
        @click="changePageNo(Math.ceil(pagination.pageNo - 1))"
      >
        <i class="el-icon-arrow-left"></i>
      </span>
      <span class="pagination-text">{{ pageValue }}／{{ Math.ceil(pagination.totalCount / pagination.pageSize) }}</span>
      <span
        class="pagination-angle"
        @click="changePageNo(Math.ceil(pagination.pageNo + 1))"
      >
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <!-- <div class="page-num">
      <el-select
        v-model="pagination.pageSize"
        size="mini"
        @change="onPageSizeChange"
      >
        <el-option
          v-for="item in pageNumOption"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HjPagination',
  props: {
    pagination: {
      type: Object,
      default: function () {
        return {
          pageNo: 1,
          pageSize: 30,
          totalCount: 0
        }
      }
    }
  },
  data () {
    return {
      defaultVal: 0,
      pageValue: 0,
      pageNumOption: [
        { value: 20, label: '20条/页' },
        { value: 30, label: '30条/页' },
        { value: 50, label: '50条/页' },
        { value: 100, label: '100条/页' }
      ]
    };
  },
  watch: {
    'pagination.pageNo': {
      immediate: true,
      handler (val) {
        this.pageValue = val
      }
    }
  },
  methods: {
    changePageNo (val) {
      if (val < 1) {
        return false;
      }
      if (val > Math.ceil(this.pagination.totalCount / this.pagination.pageSize)) {
        return false;
      }
      if (this.pageValue === val) {
        return false;
      }
      this.$emit("change", val);
      this.pageValue = val;
    },
    onPageSizeChange (val) {
      this.$emit("pageSize", val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ng-pagination {
    flex: 0 0 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #fff;

    .link {
      cursor: pointer;
      &:hover {
        color: #4394f7;
      }
    }
    .total-text {
      margin-right: 15px;
    }
    .pagination-text {
      position: relative;
      top: -2px;
    }
    .pagination-angle {
      font-size: 16px;
      display: inline-block;
      width: 24px;
      text-align: center;
      cursor: pointer;
      color: #333;
      font-weight: bold;

      &:hover {
        color: #4394f7;
      }
    }

    .page-num {
      margin-left: 10px;

      .el-select {
        width: 100px;
      }
    }
  }
</style>
