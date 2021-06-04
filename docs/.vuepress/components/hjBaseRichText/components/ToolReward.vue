<template>
  <div class="reward">
    <el-popover
      placement="top"
      :trigger="trigger">
      <div slot="reference" class="toolbar-item">奖品</div>
      <div class="reward-level">
        <div
          class="f-csp reward-level-item"
          v-for="item in list"
          :key="item.id"
          @click="handleRewardLevelClick(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </el-popover>
    <!-- 插入奖品显示文案 -->
    <el-dialog
      :title="insertRewardTitle"
      :visible.sync="showInsertReward"
      width="600px"
      @closed="handleDialogClosed"
    >
      <div class="insert-content">
        <div class="insert-item">
          <hj-base-title class="title-area" title="显示文案" title-size="16"></hj-base-title>
          <el-input
            v-model.trim="rewardText"
            placeholder=""
            size="normal"
            clearable
            show-word-limit
            maxlength="20"
          ></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-actions-content">
        <div class="action-cancel" @click="showInsertReward = false">
          取消
        </div>
        <div class="action-confirm" @click="handleInsertReward">
          确定
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import FissionTitle from '@/views/fissionActivity/components/fissionTitle';
import EditorMixins from './mixins';
const REWARD_FIELD = 'reward';
export default {
  name: 'Reward',
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
    },
    trigger: {
      type: String
    }
  },
  data () {
    return {
      showInsertReward: false,
      isEditor: false,
      insertRewardTitle: '',
      rewardText: '',
      list: [
        {
          id: 'one',
          name: '插入一级任务奖品',
          level: 1
        },
        {
          id: 'two',
          name: '插入二级任务奖品',
          level: 2
        },
        {
          id: 'three',
          name: '插入三级任务奖品',
          level: 3
        }
      ]
    }
  },
  watch: {
    type: {
      deep: true,
      handler (newValue, oldValue) {
        if (newValue === REWARD_FIELD) {
          this.isEditor = true;
          const { rewardDialogTitle, rewardText } = this.target.dataset;
          this.insertRewardTitle = rewardDialogTitle;
          this.rewardText = rewardText;
          this.showInsertReward = true;
        }
      },
      immediate: true
    }
  },
  methods: {
    handleRewardLevelClick (item) {
      this.insertRewardTitle = item.name;
      this.rewardLevel = item.level;
      this.showInsertReward = true;
    },
    handleInsertReward () {
      if (!this.rewardText) {
        this.$message('请输入显示文案', 'warning');
        return;
      }
      if (this.isEditor) {
        this.target.innerHTML = `[${this.rewardText}]`;
        this.target.dataset.rewardDialogTitle = this.insertRewardTitle;
        this.target.dataset.rewardText = this.rewardText;
        /**
         * 触发编辑事件
         * target 当前element 信息
         * type: 当前组件类型
         */
        this.$emit('edit', this.target, REWARD_FIELD);
      } else {
        const contentElement = this.$_createElement({
          innerHTML: `[${this.rewardText}]`,
          type: REWARD_FIELD,
          dataset: {
            [`${REWARD_FIELD}-dialog-title`]: this.insertRewardTitle,
            [`${REWARD_FIELD}-text`]: this.rewardText,
            [`${REWARD_FIELD}-level`]: this.rewardLevel
          }
        })
        this.$emit('insert', contentElement);
      }
      this.showInsertReward = false;
    },
    handleDialogClosed () {
      this.rewardText = '';
      this.isEditor = false;
      this.$emit('update:type', '');
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
