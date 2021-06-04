<template>
  <vuedraggable
    v-model="dataList"
    tag="ul"
    :sort="canDrag"
    class="drag-sort-wrapper"
    @change="getDrag"
  >
    <transition-group>
      <li
        v-for="(item, index) in dataList"
        :key="'transition' + index"
        :class="{'drag-sort-item-checked': checkedIndex === index, 'drag-sort-item-no-opration': !opration}"
        class="drag-sort-item"
        @click="checkItem(item, index)"
        @mouseover="mouseover(item, index)"
        @mouseleave="mouseleave(item, index)">
        <ul
          v-if="opration"
          v-show="checkedIndex === index"
          class="drag-sort-opration">
          <li
            v-for="(option, indexOption) of oprationOptions"
            :key="indexOption"
            :title="option.name"
            class="drag-sort-opration-li"
            @click="optionClick(option, item, index)">
            <span :class="option.icon"></span>
          </li>
        </ul>
        <div
          v-if="opration"
          v-show="checkedIndex === index"
          class="drag-sort-opration-move drag-sort-mask">
          <div class="drag-sort-opration-li">
            <span class="icon iconfont iconyidong"></span>
          </div>
        </div>
        <div
          v-if="opration"
          class="drag-sort-mask"></div>
        <slot
          :data="dataList[index]"
          :index="index"></slot>
      </li>
    </transition-group>
  </vuedraggable>
</template>

<script>
import vuedraggable from "vuedraggable";

export default {
  name: "HjDragSort",
  components: { vuedraggable },
  model: {
    prop: 'value',
    event: 'change'
  },
  // event: "dataChange" 该事件会暴漏数据被操作的类型和操作之后的data
  props: {
    value: { // 传值进来的数组
      type: Array,
      default: () => []
    },
    canDrag: { // 是否开启拖拽
      type: Boolean,
      default: () => true
    },
    opration: { // 控制组件是否需要右侧的操作，默认关闭状态
      type: Boolean,
      default: false
    },
    // 删除前的回调
    beforeDelete: {
      type: Function,
      default: () => true
    }
  },
  data () {
    return {
      oprationOptions: [
        { id: 1, name: "上移", type: "up", icon: "icon iconfont iconchuangjianbianji-xiangshang" },
        { id: 2, name: "下移", type: "down", icon: "icon iconfont iconchuangjianbianji-xiangxia" },
        // { id: 3, name: "复制", type: "copy", icon: "" },
        { id: 4, name: "删除", type: "delete", icon: "icon iconfont iconchuangjianbianji-shanchu" }
      ],
      checkedItem: {},
      checkedIndex: -1,
      dataList: [],
      valueLength: 0,
      clickFlag: true
    }
  },
  watch: {
    value: {
      deep: true,
      handler (value) {
        this.dataList = value
      }
    }
  },
  mounted () {
    if (this.opration) {
      this.dispatchEvent();
    }
  },
  created () {
    this.dataList = JSON.parse(JSON.stringify(this.value))
    this.valueLength = this.dataList.length
  },
  methods: {
    dispatchEvent (e) {
      const event = document.createEvent("MouseEvents");
      // initEvent接受3个参数：
      // 事件类型，是否冒泡，是否阻止浏览器的默认行为
      event.initMouseEvent("click", true, true);
      // 触发document上绑定的click事件
      document.dispatchEvent(event);
      const temp = (e) => {
        if (!this.getParentClass(e.target)) {
          this.checkedItem = {}
          this.checkedIndex = -1
        }
        // document.removeEventListener("click", temp);
      };
      document.addEventListener("click", temp);
    },
    getParentClass (target) {
      if (target.id === "app") {
        return false
      }
      if (target.className && typeof target.className === 'string' && target.className.includes("drag-sort-mask")) {
        return true
      } else {
        if (target.parentNode) {
          return this.getParentClass(target.parentNode)
        } else {
          return false
        }
      }
    },
    getDrag (val) {
      this.$emit('change', this.dataList)
      this.$emit('dataChange', "order", val)
      this.$emit('drag-change', this.dataList);
      if (this.checkedIndex >= 0) {
        if (val.moved.oldIndex === this.checkedIndex || val.moved.newIndex === this.checkedIndex) {
          let item;
          let index;
          for (let i = 0; i < this.dataList.length; i++) {
            if (this.checkedItem.ngUuid === this.dataList[i].ngUuid) {
              item = this.dataList[i]
              index = i;
              break
            }
          }
          setTimeout(() => {
            this.checkItem(item, index)
          }, 10)
        }
      }
    },
    checkItem (item, index) {
      // if (!this.clickFlag) {
      // 先注释掉，效果是不允许点击元素，不返回select
      //   return
      // }
      this.checkedItem = item;
      this.checkedIndex = index;
      this.$emit('on-select', item, index);
    },
    optionClick (optionItem, item, index) {
      this.clickFlag = false
      let i = 0;
      switch (optionItem.id) {
        case 1: // 上移
          if (index !== 0) {
            this.dataList.splice(index, 1)
            this.dataList.splice(index - 1, 0, item)
            setTimeout(() => {
              this.clickFlag = true
              this.checkItem(item, index - 1)
            }, 10)
          }
          break
        case 2:// 下移
          if (index !== (this.dataList.length - 1)) {
            this.dataList.splice(index, 1)
            this.dataList.splice(index + 1, 0, item)
            setTimeout(() => {
              this.clickFlag = true
              this.checkItem(item, index + 1)
            }, 10)
          }
          break
        case 3:// 复制
          this.dataList.splice(index, 0, item)
          setTimeout(() => {
            this.clickFlag = true
            this.checkItem(item, index)
          }, 10)
          break
        case 4:// 删除
          if (this.beforeDelete(item, index)) {
            this.dataList.splice(index, 1)
            if (this.dataList.length === index) {
              i = index - 1
            } else if (this.dataList.length > index) {
              i = index
            }
            if (i >= 0) {
              setTimeout(() => {
                this.clickFlag = true
                this.checkItem(this.dataList[i], i)
              }, 0)
            } else {
              setTimeout(() => {
                this.clickFlag = true
                this.checkItem({}, i)
              }, 0)
            }
          }
          break
        default:
          this.$message("操作错误", "error")
      }
      this.$emit('change', this.dataList)
      this.$emit('dataChange', optionItem.type, item, index)
    },
    mouseover (item, index) {
      this.$set(item, "hover", true)
      this.$emit('dataChange', "mouseover", item, index, this.dataList)
    },
    mouseleave (item, index) {
      this.$set(item, "hover", false)
      this.$emit('dataChange', "mouseleave", item, index, this.dataList)
    }
  }
}
</script>

<style scoped lang="scss">
  .drag-sort-wrapper span > .drag-sort-item {
    position: relative;
    border: 1px dashed transparent;
    &:hover {
      border: 1px dashed #606266;
    }
  }

  .drag-sort-wrapper span > .drag-sort-item-checked {
    border: 1px dashed #606266;
    background-color: rgba(216,216,216,0.1);
    &:hover {
      border: 1px dashed #606266;
    }
  }

.drag-sort-wrapper span > .drag-sort-item.drag-sort-item-no-opration {
  position: relative;
  border: none;
  &:hover {
    background: rgba(215, 215, 215, 0.15);
    border-radius: 5px;
    border: none;
  }
}

.drag-sort-wrapper span > .drag-sort-item-checked.drag-sort-item-no-opration {
  border: none;
  &:hover {
    border: none;
  }
}

  .drag-sort-mask
  {
    width: 100%;
    height: 100%;
    background: transparent;
    position: absolute;
    z-index: 2;
    cursor: pointer;
  }

  .drag-sort-opration,.drag-sort-opration-move
  {
    position: absolute;
    right: -36px;
    top: -2px;
    z-index: 999;

    .drag-sort-opration-li
    {
      width: 31px;
      height: 31px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #fff;
      background: #79797A;
      margin-bottom: 2px;
      &:hover{
        background: #4394f7;
        color: #fff;
      }
    }
    .drag-sort-opration-li:last-child
    {
      border-bottom: none;
    }
  }
  .drag-sort-opration-move
  {
    left: -33px;
    top: -2px;
    width: 31px;
    height: 31px;
  }

</style>
