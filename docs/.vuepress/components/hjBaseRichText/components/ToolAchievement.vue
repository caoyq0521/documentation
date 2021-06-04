<template>
  <div
    class="toolbar-item achievement"
    @click="handleClick"
  >
    已完成任务量
  </div>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'Achievement',
  mixins: [EditorMixins],
  methods: {
    handleClick () {
      const contentElement = this.$_createElement({
        type: 'achievement',
        innerHTML: '[已完成任务量]'
      }, false)
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
