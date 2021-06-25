<template>
  <div class="row-img">
    <hj-default-image
      class="img"
      mode="square"
      :iconSize="21"
      :width="45"
      :height="45"
      :image-source="imageSource"
      :textImage="imageText"
      :iconType="nameplateType"
    ></hj-default-image>
    <div class="flex-1 right-info">
      <div class="title" :title="title">
        <slot name="title">
          {{ title }}
          <slot name="title-tip">
            <el-tooltip v-if="titleTip" class="item" effect="dark" :content="titleTip" placement="top-start">
              <i class="iconfont iconquestion-circle-fill title-icon"></i>
            </el-tooltip>
          </slot>
        </slot>
      </div>
      <template v-if="hasInfo">
        <div class="info" :title="info" v-if="info || $slots.info">
          <slot name="info">
            <i class="iconfont iconweixin2 row-info-icon" v-if="hasWechatIcon"></i>{{ info }}
          </slot>
        </div>
        <div class="info" v-else>
          <template v-if="hasWechatIcon">
            <i class="iconfont icondaitianjia row-info-icon c-gray"></i>
            待添加
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImageInfo",
  components: {},
  props: {
    // 图片地址
    imageSource: {
      type: String,
      default: ""
    },
    // 字体图片
    imageText: {
      type: String,
      default: ""
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 标题后icon的tooltip
    titleTip: {
      type: String,
      default: ""
    },
    // 是否有描述信息
    hasInfo: {
      type: Boolean,
      default: true
    },
    // 描述信息
    info: {
      type: String,
      default: ""
    },
    // 是否有微信图标
    hasWechatIcon: {
      type: Boolean,
      default: true
    },
    iconType: {
      type: String,
      default: ""
    }
  },
  data () {
    return {};
  },
  computed: {
    nameplateType () {
      if (this.iconType) {
        return this.iconType
      }
      if (this.imageSource) {
        return "image";
      }
      return "person";
    }
  }
};
</script>
<style lang='scss' scoped>
.c-gray {
  color: #858598 !important;
}
.row-img {
  display: flex;
  white-space: nowrap;
  width: 100%;
  .img {
    width: 45px !important;
    height: 45px !important;
    border-radius: 5px;
    // background-color: #09c060;
    margin-right: 14px;
    flex: none;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    .title-icon{
      color: #c1c1ca;
      cursor: pointer;
    }
  }
  .right-info {
    flex-direction: column;
    display: inline-flex;
    justify-content: center;
    &>div{
      padding-left: 1px;
    }
  }
  .info {
    font-size: 14px;
    font-weight: 400;
    color: #858598;
    line-height: 20px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    .row-info-icon {
      color: #09c060;
      margin-right: 6px;
    }
  }
}
</style>
