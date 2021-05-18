<template>
  <div
    :class="['fission-title', {'fission-title-width-bgc': withBackgroundColor}]"
    :style="setBasicStyle"
  >
    <div class="left-info">
      <div class="title-info" :style="titleStyle">
        {{ title }}
        <span v-if="isRequired" class="is-required">*</span>
        <span v-if="showOptional" class="optional-info">(选填)</span>
      </div>
      <span v-if="tipsResult" :class="setTipsClassName" :style="tipsStyle">{{ tipsResult }}</span>
      <span class="left-text">
        <slot></slot>
      </span>
    </div>
    <div class="right-info">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
// 最小字大小
const MINI_FONT_SIZE = 14;
const TIPS_THEME = ['normal', 'danger'];
class BaseValidator {
  constructor () {
    this.titleSize = 16;
    this.tipsSize = 14;
  }

  /**
   * 校验 tips字大小
   * tips 字体大小必须 大于等于 最小字体 并且 小于 标题字体大小
   */
  checkTipsSize () {
    return this.tipsSize >= MINI_FONT_SIZE && this.tipsSize <= this.titleSize;
  }
}
const Validator = new BaseValidator();
export default {
  name: "HjBaseTitle",
  props: {
    title: {
      type: String,
      default: '标题'
    },
    titleSize: {
      type: [Number, String],
      default: 16,
      validator (value) {
        const size = parseInt(value);
        Validator.titleSize = size;
        return size >= MINI_FONT_SIZE;
      }
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    showOptional: {
      type: Boolean,
      default: false
    },
    tips: {
      type: String,
      default: ''
    },
    tipsSize: {
      type: [Number, String],
      default: 14,
      validator (value) {
        Validator.tipsSize = parseInt(value);
        return Validator.checkTipsSize();
      }
    },
    // 提示信息是否展示在 括号中
    tipsInBrackets: {
      type: Boolean,
      default: false
    },
    tipsTheme: {
      type: String,
      default: 'normal',
      validator (value) {
        return TIPS_THEME.includes(value);
      }
    },
    // 是否带有背景
    withBackgroundColor: {
      type: Boolean,
      default: false
    },
    // 背景色，在 withBackgroundColor 为 true 是生效
    backgroundColor: {
      type: String,
      default: '#F4F4F6'
    },
    // 圆角，在 withBackgroundColor 为 true 是生效
    radius: {
      type: [String, Number],
      default: 5
    }
  },
  computed: {
    setBasicStyle () {
      const raidusSize = parseInt(this.radius);
      if (this.withBackgroundColor) {
        return {
          'border-radius': `${raidusSize}px`,
          'background-color': this.backgroundColor
        }
      }
      return {}
    },
    titleStyle () {
      const size = parseInt(this.titleSize);
      return {
        'font-size': `${size}px`
      }
    },
    tipsStyle () {
      const size = parseInt(this.tipsSize);
      return {
        'font-size': `${size}px`
      }
    },
    tipsResult () {
      return this.tipsInBrackets ? `(${this.tips})` : this.tips;
    },
    setTipsClassName () {
      const isDanger = this.tipsTheme === 'danger';
      return {
        'tips-info': true,
        'danger-tips-info': isDanger
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$--color-normal: #9393A4;
$--color-danger: #FF0000;
.fission-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-info {
    display: flex;
    align-items: center;
    font-weight: 600;
    .title-info {
      color: #000000;

      .is-required {
        color: $--color-danger;
      }

      .optional-info {
        color: $--color-normal;
        margin-left: 10px;
      }
    }
    .left-text
    {
      color: $--color-normal;
    }

    .tips-info {
      color: $--color-normal;
      margin-left: 10px;
    }
    .danger-tips-info {
      color: $--color-danger;
    }
  }
}
.fission-title-width-bgc {
  padding:  12px 16px;
}
</style>
