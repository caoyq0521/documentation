<template>
  <el-input
    ref="querySearchRef"
    v-model="inputVal"
    size="medium"
    :placeholder="placeholder"
    :clearable="isClear"
    v-bind="$attrs"
    class="inputClass"
    :maxlength="maxlength"
    :show-word-limit="showWordLimit"
    @change="handleChange"
    @input="handleInput"
    @blur="onInputBlur"
    :type="type"
  >
    <i slot="suffix" v-if="!inputVal&&isShowIcon" class="el-input__icon el-icon-search"></i>
  </el-input>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    maxlength: {
      type: [String, Number],
      default: ""
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    isClear: {
      // 是否可清空
      type: Boolean,
      default: false
    },
    isShowIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data () {
    return {
      inputVal: ""
    };
  },
  watch: {
    value: {
      handler (cur) {
        this.inputVal = cur;
      },
      immediate: true
    }
  },

  methods: {
    inputClear () {
      this.$refs.querySearchRef.clear()
    },
    inputFocus () {
      this.$refs.querySearchRef.focus()
    },
    handleInput (val) {
      this.inputVal = val.replace(/[ |@|<|>|*|%|&|?|#|(|)!|;|"|']/g, "");
      this.$emit("input", this.inputVal);
    },
    handleChange (val) {
      this.$emit("handleEnter", val); // 失去焦点或者回车触发
    },
    onInputBlur () {
      this.$emit('blur')
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
