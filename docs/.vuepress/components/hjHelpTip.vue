<template>
  <div class="hj-help-tip">
    <el-tooltip
      effect="dark"
      :placement="placement"
      v-model="visibleFlags"
      popper-class="global-help-tooltip"
    >
      <div
        slot="content"
        class="global-tips"
        :class="contentClassName"
        v-html="content"
      ></div>
      <i
        :class="['icon', 'iconfont', icon]"
        :style="{ color: iconColor }"
      ></i>
    </el-tooltip>
  </div>
</template>
<script>
export default {
  name: 'HjHelpTip',
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    icon: {
      type: String,
      default: 'iconwenhao11'
    },
    iconColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.12)'
    },
    contentClassName: {
      type: String,
      default: ''
    },
    visibleFlag: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visibleFlags: ''
    }
  },
  created () {
    this.visibleFlags = this.visibleFlag
  }
}
</script>
<style lang="scss">
.global-help-tooltip {
  .global-tips {
    font-size: 12px;
    line-height: 1.8;
    img{
      width: 450px;
    }
    p {
      margin: 5px 0;
    }
  }
}

.hj-help-tip {
  display: inline-block;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, .12);
    cursor: pointer;
    overflow: unset;
  }
}
</style>
