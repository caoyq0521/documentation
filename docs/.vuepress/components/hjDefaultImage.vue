<template>
  <div
    class="hj-default-image"
    :style="mainStyles"
    :class="setClass"
  >
    <el-image
      v-if="imageUrl"
      class="default-image"
      :src="imageUrl"
      alt=""
    >
      <div slot="error" class="image-slot">
        <i
          class="iconfont iconjiazaishibai"
          :style="setIconStyle"
        ></i>
      </div>
    </el-image>
    <div
      v-else-if="!textImage"
      class="v-flex-center default-image"
    >
      <i
        class="iconfont"
        :class="setIconClass"
        :style="setIconStyle"
      ></i>
      <span v-if="tipTitle">{{ tipTitle }}</span>
    </div>
    <div
      v-else
      class="text-image"
      :style="setIconStyle"
    >
      {{ textImage[0] }}
    </div>
  </div>
</template>

<script>
/**
 * circle: 圆形
 * square: 方形
 * rectangle: 矩形
 */
const baseMode = ['circle', 'square', 'rectangle'];
const baseIconType = ['image', 'person', 'company'];
const baseTheme = ['dark', 'light'];
export default {
  name: 'HjDefaultImage',
  props: {
    imageSource: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'square',
      validator: (val) => {
        return baseMode.includes(val);
      }
    },
    iconType: {
      type: String,
      default: 'image',
      validator: (val) => {
        return baseIconType.includes(val);
      }
    },
    customIcon: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'dark',
      validator: (val) => {
        return baseTheme.includes(val);
      }
    },
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    iconSize: {
      type: Number,
      default: 16,
      validator: (val) => {
        return val >= 12 && val <= 30;
      }
    },
    tipTitle: {
      type: String,
      default: ''
    },
    // 裁剪参数
    isCrop: {
      type: Boolean,
      default: () => false
    },
    crop: {
      type: String,
      default: () => 'm40x40'
    },
    textImage: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      curImageSource: this.imageSource
    }
  },
  computed: {
    imageUrl () {
      const { curImageSource, isCrop, crop } = this
      let url = curImageSource

      if (isCrop && curImageSource) {
        const whiteList = ['.png', '.jpg', '.jpeg'];
        const imageType = curImageSource.match(/.[a-zA-Z_]+$/)[0]
        if (!whiteList.includes(imageType)) return url
        url = `${url}!${crop}${imageType}`
      }

      return url
    },
    mainStyles () {
      const width = this.width ? `${parseInt(this.width)}px` : '100%';
      const height = this.height ? `${parseInt(this.height)}px` : '100%';
      return {
        height,
        width
      };
    },
    setClass () {
      return {
        'circle-default-image': this.mode === 'circle',
        'square-default-image': this.mode === 'square',
        'light-default-image': this.theme === 'light'
      };
    },
    setIconClass () {
      let className = '';
      if (this.iconType === 'image') className = 'iconzhaopian';
      if (this.iconType === 'person') className = 'icontouxiang';
      if (this.iconType === 'company') className = 'iconqiye';
      if (this.customIcon) className = this.customIcon;
      return {
        [className]: true
      };
    },
    setIconStyle () {
      return {
        'font-size': `${this.iconSize}px`
      }
    }
  },
  watch: {
    imageSource (newValue) {
      this.curImageSource = newValue;
    }
  },
  methods: {
    handleImageError (e) {
      const reg = /.+(?=!)/g;
      if (this.curImageSource.includes('!')) {
        this.curImageSource = this.curImageSource.match(reg)[0];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hj-default-image {
  flex-shrink: 0;

  .el-image {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }

  >div, img {
    width: 100%;
    height: 100%;
  }

  .default-image{
    flex-direction: column;
    background-color: #d7d7d7;
    color: #D7D7D7;

    .iconfont{
      color: #ffffff;
    }

    span {
      margin-top: 5px;
    }
  }

  .text-image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D7D7D7;
    color: #ffffff;
  }
}

.circle-default-image{
  >div, img{
    border-radius: 50%;
  }
}

.square-default-image{
  >div, img {
    border-radius: 5px;
  }
}

.light-default-image{
  .default-image{
    background:rgba(246,246,246,0.5);

    .iconfont{
      color: #D7D7D7;
    }
  }
}
</style>
