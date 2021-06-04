# HjDragSort

基础的拖拽组件。

### 基础用法

::: demo
```html
<template>
  <div>
    <hj-drag-sort 
      :value="value"
      @change="handelSortChange"
    >
      <template #default="{ data }">
        <div>
          {{ data.name }}
        </div>
      </template>
    </hj-drag-sort>
    <div>
      当前顺序为：
      <template v-for="(item, index) in value">
        <span :key="index">
          {{ item.name }}
        </span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [
        {
          id: 1,
          name: '标题1'
        },
        {
          id: 2,
          name: '标题2'
        }
      ]
    }
  },
  methods: {
    handelSortChange(list) {
      this.value = list;
    }
  },
}
</script>
:::

### 操作按钮

通过配置 `opration` 属性可以显示 `上移`、`下移`、`删除`操作按钮。

::: demo
```html
<template>
  <div class="hj-drag-sort__demo2">
    <hj-drag-sort 
      :value="value"
      opration
      @change="handelSortChange"
    >
      <template #default="{ data }">
        <div class="item">
          {{ data.name }}
        </div>
      </template>
    </hj-drag-sort>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [
        {
          id: 1,
          name: '标题1'
        },
        {
          id: 2,
          name: '标题2'
        }
      ]
    }
  },
  methods: {
    handelSortChange(list) {
      this.value = list;
    }
  },
}
</script>
:::

### Attributes

参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-
value | 传值进来的数组 | Array | - | -
canDrag | 是否开启拖拽 | Boolean | true | -
opration | 控制组件是否需要右侧的操作 | Boolean | false | -
beforeDelete | 删除前的回调 | Function | - | -

### Events

事件名称|说明|回调参数
:-|:-|:-
change | 拖放操作更改相应数组结束时触发事件 | 拖拽之后的数据
dataChange | 拖放操作更改相应数据对象时触发的事件 | 共两个参数，依次为：当前操作类型（order、mouseover、mouseleave、up、down、delete）、当前操作的数据对象
on-select | 点击某项数据时触发的事件 | 共两个参数，依次为：当前操作的数据对象、对象索引