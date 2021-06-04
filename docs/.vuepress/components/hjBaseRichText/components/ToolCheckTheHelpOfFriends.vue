<template>
  <div class="check-the-help-of-friends toolbar-item" @click="handleClick">戳此查看好友助力情况</div>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'CheckTheHelpOfFriends',
  mixins: [EditorMixins],
  methods: {
    handleClick () {
      const contentElement = this.$_createElement({
        type: 'checkTheHelpOfFriends',
        innerHTML: '[戳此查看好友助力情况]'
      }, false)
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
