<template>
  <div class="miniprogram">
    <div
      class="toolbar-item"
      @click="handleClick"
    >
      小程序
    </div>
    <!-- 插入小程序信息 -->
    <el-dialog
      title="插入小程序"
      :visible.sync="showInsertMiniProgram"
      width="600px"
      @closed="handleDialogClosed"
    >
      <div class="insert-content">
        <div class="insert-item">
          <hj-base-title
            class="title-area"
            title="小程序链接文本"
            title-size="16"
            tips="用户点击该段文本跳转到小程序链接"
            tipsSize="16"
            tipsInBrackets
          ></hj-base-title>
          <el-input
            v-model.trim="miniProgramlinkText"
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
            title="小程序APPID"
            title-size="16"
          ></hj-base-title>
          <el-input
            v-model.trim="miniProgramAppid"
            placeholder="请输入小程序APPID"
            size="normal"
            clearable
            show-word-limit
            maxlength="200"
          ></el-input>
        </div>
        <div class="insert-item">
          <hj-base-title
            class="title-area"
            title="小程序跳转路径"
            title-size="16"
          ></hj-base-title>
          <el-input
            v-model.trim="miniProgramPath"
            placeholder="请输入跳转的路径"
            size="normal"
            clearable
            show-word-limit
            maxlength="200"
          ></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-actions-content">
        <div class="action-cancel" @click="showInsertMiniProgram = false">
          取消
        </div>
        <div class="action-confirm" @click="handleInsertMiniProgram">
          确定
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import FissionTitle from '@/views/fissionActivity/components/fissionTitle';
import EditorMixins from './mixins';
const MINI_PROGRAM_FIELD = 'miniProgram';
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
      type: Element,
      default: () => ({})
    }
  },
  data () {
    return {
      isEditor: false,
      showInsertMiniProgram: false,
      miniProgramlinkText: '',
      miniProgramAppid: '',
      miniProgramPath: ''
    }
  },
  watch: {
    type: {
      deep: true,
      handler (newValue, oldValue) {
        if (newValue === MINI_PROGRAM_FIELD) {
          this.isEditor = true;
          const { miniprogramAppid, miniprogramPath, miniprogramText } = this.target.dataset;
          this.miniProgramAppid = miniprogramAppid;
          this.miniProgramPath = miniprogramPath;
          this.miniProgramlinkText = miniprogramText;
          this.showInsertMiniProgram = true;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick () {
      this.showInsertMiniProgram = true;
    },
    handleInsertMiniProgram () {
      if (!this.miniProgramlinkText) {
        this.$message('请输入链接显示文字', 'warning');
        return;
      }
      if (!this.miniProgramAppid) {
        this.$message('请输入小程序APPID', 'warning');
        return;
      }
      if (!this.miniProgramPath) {
        this.$message('请输入跳转的路径', 'warning');
        return;
      }
      if (this.isEditor) {
        this.target.innerHTML = `[${this.miniProgramlinkText}]`;
        this.target.dataset.miniprogramAppid = this.miniProgramAppid;
        this.target.dataset.miniprogramPath = this.miniProgramPath;
        this.target.dataset.miniprogramText = this.miniProgramlinkText;
        /**
         * 触发编辑事件
         * target 当前element 信息
         * type: 当前组件类型
         */
        this.$emit('edit', this.target, MINI_PROGRAM_FIELD);
      } else {
        const contentElement = this.$_createElement({
          type: MINI_PROGRAM_FIELD,
          innerHTML: `[${this.miniProgramlinkText}]`,
          dataset: {
            [`${MINI_PROGRAM_FIELD}-appid`]: this.miniProgramAppid,
            [`${MINI_PROGRAM_FIELD}-path`]: this.miniProgramPath,
            [`${MINI_PROGRAM_FIELD}-text`]: this.miniProgramlinkText
          }
        })
        this.$emit('insert', contentElement);
      }
      this.showInsertMiniProgram = false;
    },
    handleDialogClosed () {
      this.miniProgramlinkText = '';
      this.miniProgramAppid = '';
      this.miniProgramPath = '';
      this.isEditor = false;
      this.$emit('update:type', '');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
