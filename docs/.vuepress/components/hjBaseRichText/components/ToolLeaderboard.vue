<template>
  <div class="leaderboard">
    <div
      class="toolbar-item"
      @click="handleClick"
    >
      排行榜
    </div>
    <!-- 插入排行榜显示文案 -->
    <el-dialog
      title="插入排行榜"
      :visible.sync="showInsertLeaderboard"
      width="600px"
      @closed="handleDialogClosed"
    >
      <div class="insert-content">
        <div class="insert-item">
          <hj-base-title class="title-area" title="显示文案" title-size="16"></hj-base-title>
          <el-input
            v-model.trim="leaderboardText"
            placeholder=""
            size="normal"
            clearable
            show-word-limit
            maxlength="20"
          ></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-actions-content">
        <div class="action-cancel" @click="showInsertLeaderboard = false">
          取消
        </div>
        <div class="action-confirm" @click="handleInsertLeaderboard">
          确定
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import FissionTitle from '@/views/fissionActivity/components/fissionTitle';
import EditorMixins from './mixins';
const LEADERBOARD_FIELD = 'leaderboard'
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
      showInsertLeaderboard: false,
      leaderboardText: ''
    }
  },
  watch: {
    type: {
      deep: true,
      handler (newValue, oldValue) {
        if (newValue === LEADERBOARD_FIELD) {
          this.isEditor = true;
          const { leaderboardText } = this.target.dataset;
          this.leaderboardText = leaderboardText;
          this.showInsertLeaderboard = true;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick () {
      this.showInsertLeaderboard = true;
    },
    handleInsertLeaderboard () {
      if (!this.leaderboardText) {
        this.$message('请输入显示文案', 'warning');
        return;
      }
      if (this.isEditor) {
        this.target.innerHTML = `[${this.leaderboardText}]`;
        this.target.dataset.leaderboardText = this.leaderboardText;
        /**
         * 触发编辑事件
         * target 当前element 信息
         * type: 当前组件类型
         */
        this.$emit('edit', this.target, LEADERBOARD_FIELD);
      } else {
        const contentElement = this.$_createElement({
          innerHTML: `[${this.leaderboardText}]`,
          type: LEADERBOARD_FIELD,
          dataset: {
            [`${LEADERBOARD_FIELD}-text`]: this.leaderboardText
          }
        })
        this.$emit('insert', contentElement);
      }
      this.showInsertLeaderboard = false;
    },
    handleDialogClosed () {
      this.leaderboardText = '';
      this.isEditor = false;
      this.$emit('update:type', '');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
