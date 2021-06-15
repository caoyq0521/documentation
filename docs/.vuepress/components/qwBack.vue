<template>
  <div class="back-wrap">
    <div
      v-if="isShowBack"
      class="qw-back"
    >
      <div
        class="v-flex-center f-csp qw-back__left"
        @click.stop="handleBack"
      >
        <img
          :src="$withBase('/images/left-bg.png')"
          alt=""
          class="qw-back__icon"
        >
        <span>{{ title }}</span>
      </div>
      <div
        v-if="showComplete"
        class="qw-back__right"
      >
        <slot name="right">
          <!-- <div
            class="f-csp v-flex-center qw-back__right-basic"
            @click="handleComplete"
          >
            {{ completeName }}
          </div> -->
          <div
            class="f-csp v-flex-center qw-back__right-basic"
          >
            <el-button
              v-preventReClick
              type="text"
              class="goback-button"
              @click="handleComplete"
            >{{ completeName }}</el-button>
          </div>
        </slot>
      </div>
    </div>
    <!-- <div class="abnormal">
      <slot name="abnormal"></slot>
    </div> -->
  </div>

</template>

<script>
  export default {
    name: 'QwBack',
    props: {
      // 返回提示文案
      title: {
        type: String,
        default: '返回'
      },
      // 返回是否是后退
      noBack: {
        type: Boolean,
        default: false
      },
      // 完成提示文案
      completeName: {
        type: String,
        default: '完成'
      },
      // 是否显示完成
      showComplete: {
        type: Boolean,
        default: true
      },
      isShowBack: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleBack() {
        if (this.noBack) {
          this.$emit('goback');
        } else {
          this.$router.go(-1);
        }
      },
      handleComplete() {
        this.$emit('complete');
      }
    }
  };
</script>

<style lang="scss" scoped>
.back-wrap{
  .qw-back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding-left: 16px;
    border-bottom: 1PX solid #E6E6E6;

    &__left {
      padding: 4px 0;
    }
    &__icon {
      width: 18px;
      margin-right: 8px;
    }

    &__right-basic {
      height: 20px;
      padding: 0 16px;
      color: #0281F0;
      border-left: 1PX solid #E6E6E6;
      .el-button--text {
        color: #0281F0;
      }
    }
  }
  .goback-button {
    font-size: 14px;
  }
}

</style>
