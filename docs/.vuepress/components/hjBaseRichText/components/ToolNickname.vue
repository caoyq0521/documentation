<template>
  <div
    class="toolbar-item nickname"
    @click="handleClick"
  >
    用户昵称
  </div>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'Nickname',
  mixins: [EditorMixins],
  methods: {
    handleClick () {
      const contentElement = this.$_createElement({
        type: 'nickname',
        innerHTML: '[用户昵称]'
      }, false)
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
