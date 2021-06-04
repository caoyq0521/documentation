<template>
  <div
    class="toolbar-item booster-nickname"
    @click="handleClick"
  >
    助力好友昵称
  </div>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'BoosterNickname',
  mixins: [EditorMixins],
  methods: {
    handleClick () {
      const contentElement = this.$_createElement({
        type: 'boosterNickname',
        innerHTML: '[助力好友昵称]'
      }, false)
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
