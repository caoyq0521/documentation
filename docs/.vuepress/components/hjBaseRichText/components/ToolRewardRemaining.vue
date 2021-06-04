<template>
  <el-popover
    placement="top"
    :trigger="trigger">
    <div slot="reference" class="toolbar-item reward-remaining">库存剩余</div>
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
  name: 'RewardRemaining',
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
          name: '一级奖品库存',
          level: 1
        },
        {
          id: 'two',
          name: '二级奖品库存',
          level: 2
        },
        {
          id: 'three',
          name: '三级奖品库存',
          level: 3
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      const contentElement = this.$_createElement({
        type: 'rewardRemaining',
        innerHTML: `[${item.name}]`,
        dataset: {
          'rewardRemaining-level': item.level
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
