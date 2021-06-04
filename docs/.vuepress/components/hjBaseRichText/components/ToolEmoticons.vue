<template>
  <el-popover
    placement="top"
    :trigger="trigger">
    <div slot="reference" class="toolbar-item emoticons">表情</div>
    <emoji-picker @select="selectEmoji"></emoji-picker>
  </el-popover>
</template>

<script>
import EditorMixins from './mixins';
export default {
  name: 'Emoticons',
  components: {
    // EmojiPicker
  },
  mixins: [EditorMixins],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    }
  },
  methods: {
    selectEmoji (emoji) {
      const contentElement = this.$_createElement({
        type: 'emoticons',
        innerHTML: emoji.data
      }, false)
      this.$emit('insert', contentElement);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
