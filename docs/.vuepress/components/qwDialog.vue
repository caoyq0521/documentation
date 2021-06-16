<template>
  <van-dialog
    v-model="showDialog"
    title=""
    :show-confirm-button="false"
    :close-on-click-overlay="closeOnClickOverlay"
    get-container="body"
    @open="handleDialogOpen"
    @close="handleDialogClose"
  >
    <div class="tanma-dialog-container">
      <div class="dialog-header">
        <slot name="title">
          <div class="dialog-title">{{ title }}</div>
        </slot>
        <div
          class="v-flex-center f-csp dialog-close"
          @click="handleDialogClose"
        >
          <i class="iconfont iconguanbi"></i>
        </div>
      </div>
      <slot>

      </slot>
    </div>
  </van-dialog>
</template>

<script>
  export default {
    name: 'QwDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '标题'
      }
    },
    data() {
      return {
      };
    },
    computed: {
      showDialog: {
        get() {
          return this.visible;
        },
        set(value) {
          this.$emit('update:visible', value);
        }
      }
    },
    watch: {
      visible(newValue) {
        this.showDialog = newValue;
      }
    },
    methods: {
      handleDialogOpen() {
        this.$emit('open');
      },
      handleDialogClose() {
        this.showDialog = false;
        this.$emit('close');
      }
    }
  };
</script>

<style lang="scss" scoped>
.van-dialog {
  position: absolute;
}
.dialog {
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 24px 14px 10px 20px;
  }
  &-title {
    font-size: 18px;
    line-height: 25px;
    font-weight: bold;
  }
  &-close {
    width: 23px;
    height: 23px;
    .iconguanbi {
      font-size: 12px;
    }
  }
}
</style>
