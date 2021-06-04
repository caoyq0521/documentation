<template>
  <el-popover
    placement="top"
    :trigger="trigger">
    <div slot="reference" class="toolbar-item achieve-requirement">达成条件需要人数</div>
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
const list = [
  {
    id: 'one',
    name: '达成一级条件需要人数',
    level: 1
  },
  {
    id: 'two',
    name: '达成二级条件需要人数',
    level: 2
  },
  {
    id: 'three',
    name: '达成三级条件需要人数',
    level: 3
  }
]
export default {
  name: 'AchieveRequirement',
  mixins: [EditorMixins],
  props: {
    trigger: {
      type: String
    },
    maxLevel: {
      type: Number,
      default: 3
    }
  },
  data () {
    return {
    }
  },
  computed: {
    list () {
      return list.slice(0, this.maxLevel)
    }
  },
  methods: {
    handleClick (item) {
      const contentElement = this.$_createElement({
        type: 'achieveRequirement',
        innerHTML: `[${item.name}]`,
        dataset: {
          'achieveRequirement-level': item.level
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
