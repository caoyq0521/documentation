<template>
  <div class="base-expand-collapse">
    <div
      ref="ContentText"
      class="content-text"
      v-html="text"
    ></div>
    <div
      v-if="textHandleShow"
      class="show-btn"
    >
      <div
        class="f-csp v-flex-center"
        @click="handleStatus"
      >
        <span>
          {{ handleText }}
        </span>
        <img
          :class="['arrow-icon', {'arrow-top': !btnFlag}]"
          :src="$withBase('/images/arrowDown.png')"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'BaseExpandCollapse',
    props: {
      text: {
        type: String,
        default: ''
      },
      row: {
        type: Number,
        default: 7
      },
      openText: {
        type: String,
        default: '展开'
      },
      closeText: {
        type: String,
        default: '收起'
      }
    },
    data() {
      return {
        btnFlag: true,
        textHandleShow: false,
        subText: '',
        eleHeight: '50px',
        maxEleHeight: null
      };
    },
    computed: {
      handleText() {
        return this.btnFlag ? this.openText : this.closeText;
      }
    },
    watch: {
      text: {
        handler(newValue) {
          this.$nextTick(() => {
            const styles = window.getComputedStyle(this.$refs.ContentText, null);

            // 获取行高
            const lineHeight = Math.floor(parseFloat(styles.lineHeight));
            // 获取高度
            const height = Math.floor(parseFloat(styles.height));
            // 获取这段文字一共有多行
            const lineNum = Math.ceil(height / lineHeight);
            if (lineNum > this.row) {
              const curHeight = lineHeight * this.row;
              this.$refs.ContentText.style.height = `${curHeight}px`;
              this.eleHeight = curHeight;
              this.maxEleHeight = lineNum * lineHeight + 20;
              this.textHandleShow = true;
            } else {
              this.textHandleShow = false;
              this.$refs.ContentText.style.height = `${lineHeight * lineNum}px`;
            }
          });
        },
        immediate: true
      }
    },
    methods: {
      handleStatus() {
        this.btnFlag = !this.btnFlag;
        let height;
        if (this.btnFlag) height = this.eleHeight;
        else height = this.maxEleHeight;
        this.$refs.ContentText.style.height = `${height}px`;
      }
    }
  };
</script>

<style lang="scss" scoped>
.content-text {
  white-space: pre-line;
  word-break: break-all;
  text-align: justify;
  line-height: 20px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  /deep/ p {
    line-height: 20px;
    white-space: pre-line;
    word-break: break-all;
    text-align: justify;
  }
  /deep/ img {
    width: 15px;
    vertical-align: middle;
  }
}
.show-btn{
  display: flex;
  font-size: 14px;
  margin-top: 10px;
  color: #999;

  .arrow-icon{
    width: 10px;
    margin-left: 6px;
    transition: transform 0.3s;
  }

  .arrow-top{
    transform: rotate(-180deg);
  }
}
</style>
