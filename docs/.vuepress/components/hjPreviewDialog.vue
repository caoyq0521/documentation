<template>
  <el-dialog
    class="hj-preview-dialog"
    append-to-body
    :visible.sync="visible"
    :width="width"
    :before-close="handleClose"
  >
    <div class="preview-dialog-mainbody">
      <slot></slot>
      <div class="v-flex-center f-csp close" @click="handleClose">
        <i class="el-icon-close"></i>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "HjPreviewDialog",
  components: {
  },
  props: {
    width: {
      type: String,
      default: '514px'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
  watch: {
    visible (newValue) {
      if (!newValue) this.$emit('update:visible', false);
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
};
</script>

<style lang="scss" scoped>
.hj-preview-dialog {
  padding: 20px 0;
  /deep/ .el-dialog{
    background-color: rgba(0, 0,0,0);
    box-shadow: none;
  }
  & /deep/ .el-dialog__header {
    padding: 0px;
  }
  & /deep/ .el-dialog__body {
    padding: 0px;
    border-radius: 5px;
  }
  /deep/.el-dialog__headerbtn{
    display: none;
  }
}
.preview-dialog-mainbody {
  display: flex;
}
.close {
  position: sticky;
  top: 7vh;
  flex-shrink: 0;
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
}
</style>
