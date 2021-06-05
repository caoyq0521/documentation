# HjPagination

基础的分页组件，一般配合 [listPage](/web/mixins/listPage) 混入使用。

### 基础用法

::: demo
```html
<template>
  <hj-pagination 
    :pagination="pagination"
    @change="handlePageChange"
  />
</template>
<script>
export default {
  data() {
    return {
      pagination: {
        pageNo: 1,
        pageSize: 30,
        totalCount: 100
      }
    }
  },
  methods: {
    handlePageChange(page) {
      this.pagination.pageNo = page;
    }
  },
}
</script>
:::


### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
pagination | 分页配置信息 | Object | - | {pageNo: 1, pageSize: 30, totalCount: 0}

### Events

事件名称|说明|回调参数
:-|:-|:-
change | 页码改变时会触发 | 当前页