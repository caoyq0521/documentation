<template>
  <el-popover
    placement="top"
    :trigger="trigger">
    <div slot="reference" class="toolbar-item">未完成任务量</div>
    <div class="reward-level">
      <div
        class="f-csp reward-level-item"
        v-for="item in list"
        :key="item.id"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </el-popover>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'AchieveDistance',
  mixins: [EditorMixins],
  props: {
    trigger: {
      type: String
    }
  },
  data () {
    return {
      list: [
        {
          id: 'one',
          name: '一级未完成任务量',
          level: 1
        },
        {
          id: 'two',
          name: '二级未完成任务量',
          level: 2
        },
        {
          id: 'three',
          name: '三级未完成任务量',
          level: 3
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      const contentElement = this.$_createElement({
        type: 'achieveDistance',
        innerHTML: `[${item.name}]`,
        dataset: {
          'achieveDistance-level': item.level
        }
      }, false);
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>
.reward-level {
  padding: 10px 0;
  text-align: center;
  .reward-level-item {
    line-height: 1.5;
  }
  .reward-level-item:not(:last-child){
    margin-bottom: 10px;
  }
}
</style>
