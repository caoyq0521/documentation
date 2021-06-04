<template>
  <div class="link">
    <div
      class="toolbar-item"
      @click="handleClick"
    >
      链接
    </div>
    <el-dialog
      title="插入链接"
      :visible.sync="showInsertLink"
      width="600px"
      @closed="handleDialogClosed"
    >
      <div class="insert-content">
        <div class="insert-item">
          <hj-base-title
            class="title-area"
            title="链接文本"
            title-size="16"
            tips="用户点击该段文本跳转到链接网页"
            tipsSize="16"
            tipsInBrackets
          ></hj-base-title>
          <el-input
            v-model.trim="linkText"
            placeholder="请输入链接显示的文字"
            size="normal"
            clearable
            show-word-limit
            maxlength="20"
          ></el-input>
        </div>
        <div class="insert-item">
          <hj-base-title
            class="title-area"
            title="链接地址"
            title-size="16"
          ></hj-base-title>
          <el-input
            v-model.trim="linkHref"
            placeholder="https:// 或 http://开头"
            size="normal"
            clearable
            show-word-limit
            maxlength="200"
          ></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-actions-content">
        <div class="action-cancel" @click="showInsertLink = false">
          取消
        </div>
        <div class="action-confirm" @click="handleInsertLink">
          确定
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import FissionTitle from '@/views/fissionActivity/components/fissionTitle';
import EditorMixins from './mixins';
const LINK_FIELD = 'link';
export default {
  name: 'Leaderboard',
  components: {
    // FissionTitle
  },
  mixins: [EditorMixins],
  props: {
    type: {
      type: String,
      default: ''
    },
    target: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      isEditor: false,
      showInsertLink: false,
      linkText: '',
      linkHref: ''
    }
  },
  watch: {
    type: {
      deep: true,
      handler (newValue, oldValue) {
        if (newValue === LINK_FIELD) {
          this.isEditor = true;
          const { linkPath, linkText } = this.target.dataset;
          this.linkText = linkText;
          this.linkHref = linkPath;
          this.showInsertLink = true;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick () {
      this.showInsertLink = true;
    },
    handleInsertLink () {
      if (!this.linkText) {
        this.$message('请输入链接显示的文字', 'warning');
        return;
      }
      if (!this.linkHref) {
        this.$message('请输入链接地址', 'warning');
        return;
      }
      if (!this.linkHref.startsWith('https://') && !this.linkHref.startsWith('http://')) {
        this.$message('请输入正确的链接', 'warning');
        return;
      }
      if (this.isEditor) {
        this.target.innerHTML = `[${this.linkText}]`;
        this.target.dataset.linkText = this.linkText;
        this.target.dataset.linkPath = this.linkHref;
        /**
         * 触发编辑事件
         * target 当前element 信息
         * type: 当前组件类型
         */
        this.$emit('edit', this.target, LINK_FIELD);
      } else {
        const contentElement = this.$_createElement({
          innerHTML: `[${this.linkText}]`,
          type: LINK_FIELD,
          dataset: {
            [`${LINK_FIELD}-text`]: this.linkText,
            [`${LINK_FIELD}-path`]: this.linkHref
          }
        })
        this.$emit('insert', contentElement);
      }
      this.showInsertLink = false;
    },
    handleDialogClosed () {
      this.linkText = '';
      this.linkHref = '';
      this.isEditor = false;
      this.$emit('update:type', '');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
