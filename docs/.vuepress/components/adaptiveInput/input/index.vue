<template>
  <div class="adaptive-field">
    <!-- 显示主体 -->
    <van-field
      :value="value"
      :placeholder="placeholder"
      v-bind="$props"
      readonly
      clickable
      class="display-panel"
      :type="type === 'textarea' ? 'text' : type"
      @click="open"
    >
      <template #right-icon>
        <van-icon name="arrow"></van-icon>
      </template>
    </van-field>
    <!-- 输入主体 -->
    <van-popup
      v-model="visiable"
      get-container="body"
      :position="position"
    >
      <van-field
        ref="input"
        v-model="realValue"
        class="input-panel"
        v-bind="$attrs"
        :type="type === 'password' ? 'password' : type"
        input-align="left"
        :placeholder="placeholder"
        clickable
        autosize
        @click="toFocus"
      ></van-field>
      <div class="footer">
        <van-button
          type="default"
          @click="cancel"
        >取消</van-button>
        <van-button
          type="info"
          @click="confirm"
        >确定</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: undefined,
        default: undefined
      },
      label: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: '请填写'
      }
    },
    data() {
      return {
        visiable: false,
        realValue: ''
      };
    },
    computed: {
      position() {
        return this.$tool.isMobile() ? 'top' : 'bottom';
      }
    },
    watch: {
      value: {
        handler(val) {
          this.realValue = val;
        },
        immediate: true
      }
    },
    methods: {
      cancel() {
        this.visiable = false;
      },
      confirm() {
        this.$emit('adapt-change', this.realValue);
        this.visiable = false;
      },
      open() {
        this.visiable = true;
      },
      toFocus() {
        this.$refs.input.focus();
      }
    }
  };
</script>
<style lang='scss' scoped>
.content {
  font-size: 12px;
}

.display-panel {
  /deep/ .van-field__control {
    min-height: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.input-panel {
  height: 200px;
}
.footer {
  display: flex;
  & > * {
    flex: 1;
    border-radius: 0;
  }
}
</style>
