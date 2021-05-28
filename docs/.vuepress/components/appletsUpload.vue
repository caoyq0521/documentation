<template>
  <div>
    <span class="preview-title">上传封面图<span style="color:red">*</span></span>
    <div class="preview-cover" @mousemove="mouseMove" @mouseout="mouseOut">
      <div class="upload-image-show" ref="upload-img">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <span v-else>
          <i
            class="iconfont iconzhaopian"
          ></i>
          <span class="preview-cover-tip">上传照片</span>
        </span>
      </div>
      <div
        v-show="showMode"
        class="preview-upload-mode"
      >
        <div class="mode-container">
          <div
            class="v-flex-center f-csp"
            @click="selectFormContent"
          >
            内容中选取
          </div>
          <span></span>
          <el-upload
            ref="elUpload"
            class="v-flex-center upload-image"
            :show-file-list="false"
            :accept="accept"
            :on-success="handleSuccess"
            :on-progress="handleProgress"
            :before-upload="beforeUpload"
          >
            <span>本地上传</span>
          </el-upload>
        </div>
      </div>
    </div>
    <!-- 选取图片modal -->
    <el-dialog
      :visible.sync="showSelectImagesModal"
      title="选取图片"
      width="540px"
    >
      <div class="file-list" v-if="showSelectImagesModal">
        <template v-for="(item, index) in imagesData">
          <div
            :key="index"
            class="f-csp file-item"
            @click="choiceImages(index)"
          >
            <el-image
              class="item-cover-image"
              :src="item.url"
              alt=""
              :fit="'cover'"
              lazy
            >
            </el-image>
            <div class="choice-file">
              <div
                v-if="item._isChecked"
                class="check"
              >
                <i class="iconfont iconduihao"></i>
              </div>
              <div
                v-else
                class="not-check"
              >
              </div>
            </div>
          </div>
        </template>
      </div>
      <div slot="footer" class="dialog-actions-content">
        <div
          class="action-cancel"
          @click="showSelectImagesModal = false"
        >
          取消
        </div>
        <div
          class="action-confirm"
          @click="handleModalOk"
        >
          确定
        </div>
      </div>
    </el-dialog>
    <el-dialog
      title="上传"
      :visible.sync="showProgress"
      width="30%"
      @close="handleDialogClose"
      @open="handleDialogOpen"
    >
      <div class="progress-info">
        <el-progress
          :percentage="imgUploadPercent"
        ></el-progress>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {

  props: {
    // 是否需要裁取图片
    noCut: {
      type: Boolean,
      default: false
    },
    coverImageUrl: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: () => []
    },
    // 文件的大小限制,单位为MB
    sizeLimit: {
      type: Number,
      default: 5
    },
    accept: {
      type: String,
      default: 'image/jpeg,image/jpg,image/png'
    }
  },
  data () {
    return {
      imgFile: {},
      imageUrl: '',
      showProgress: false,
      showMode: false,
      showSelectImagesModal: false,
      imagesData: [],
      imgUploadPercent: 0
    }
  },
  watch: {
    images () {
      this.imagesData = this.makeImagesData();
    },
    coverImageUrl: {
      handler (newValue) {
        if (newValue && !newValue.endsWith('.gif')) {
          this.imageUrl = newValue;
          if (this.$refs['upload-img']) { this.$refs['upload-img'].style.border = 0 }
        }
      },
      immediate: true
    },
    showSelectImagesModal (newValue) {
      if (newValue) {
        this.imagesData = this.makeImagesData();
      }
    }
  },
  methods: {
    mouseMove () {
      this.showMode = true;
    },
    mouseOut () {
      this.showMode = false;
    },
    /**
     * 从内容中选取
     */
    selectFormContent () {
      // 如果内容中没有图片则提示
      if (!this.imagesData.length) {
        this.$message('内容中暂无图片！');
        return;
      }
      this.showSelectImagesModal = true;
    },
    beforeUpload (file) {
      const limit = file.size / 1024 / 1024 < this.sizeLimit;
      const includesAccept = this.accept.includes(file.type);
      if (!limit) {
        this.$message(`上传的文件小不能超过 ${this.sizeLimit}MB!`, 'error');
      }
      if (!includesAccept) {
        this.$message('上传文件格式不对!', 'error');
      }
      if (limit && includesAccept) this.showProgress = true;
      return limit && includesAccept;
    },
    handleProgress (event, file, fileList) {
      this.imgFile = file;
      this.imgUploadPercent = parseInt(file.percentage.toFixed(0), 10);
    },
    handleSuccess (response, file, fileList) {
      this.imgUploadPercent = 100;
      this.showProgress = false;
      if (response.code === 500) {
        this.$message(response.message, 'error');
        return;
      }
      this.$emit('file-success', response.data.url, file, fileList);
      this.$refs.elUpload.clearFiles();
    },
    /**
     * 选择图片
     * @param {String} index 当前点击的图片索引
     */
    choiceImages (index) {
      this.imagesData.map((item, idx) => {
        item._isChecked = index === idx;
        return item;
      });
    },
    makeImagesData () {
      const data = JSON.parse(JSON.stringify(this.images));
      const newData = data.filter(item => {
        return !item.url.endsWith('.gif') && item.url
      })
      newData.forEach(item => {
        item._isChecked = item.url === this.imageUrl;
        return item;
      })
      return newData;
    },
    handleModalOk () {
      const checkData = this.imagesData.filter(item => item._isChecked)[0];
      this.showSelectImagesModal = false
      this.$emit('choice', checkData.url);
    },
    handleDialogClose () {
      this.$refs.elUpload.abort(this.imgFile);
    },
    handleDialogOpen () {
      this.imgUploadPercent = 0;
    }
  }

}
</script>

<style lang="scss" scoped>
.preview-title {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 24px;
    font-weight: bold;
  }
  .preview-cover{
    position: relative;
  }
.upload-image-show {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 283px;
    height: 153px;
    border-radius: 5px;
    background: rgba(245,245,250,0.5);
    border: 1px dashed #ccc;
    color: #C7C8D6;
    cursor: pointer;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #ccc;
        }
    .preview-cover-tip {
      font-size: 14px;
    }
    .iconfont {
      font-size: 24px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}
  .preview-upload-mode{
    position: absolute;
    left: 20px;
    top: 110px;
    width: 240px;
    height: 50px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .8);
    .mode-container{
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      color: #ffffff;
      &:before{
        position: absolute;
        top: -5px;
        left: 50%;
        margin-left: -3px;
        content: '';
        border-top: 0 solid transparent;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 5px solid rgba(0, 0, 0, .8);
      }
      >div{
        flex-grow: 1;
        &:hover{
          color: #3470FF;
        }
      }
      >span{
        width: 1px;
        height: 15px;
        margin-right: 7px;
        background-color: #D7D7D7;
      }
      /deep/.el-upload{
        &:focus{
          color: inherit;
        }
      }
    }
  }

  .file-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-height: 426px;
    overflow-y: auto;
    padding: 0 30px;
    >div:not(:nth-child(-n + 3)){
      margin-top: 6px;
    }
    >div:not(:nth-child(3n + 3)){
      margin-right: 6px;
    }
    .file-item{
      position: relative;
      width: 136px;
      height: 136px;
      border-radius: 5px;
      overflow: hidden;
      .item-cover-image {
        width: 100%;
        height: 100%;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .choice-file{
        position: absolute;
        bottom: 14px; right: 16px;
        width: 20px;
        height: 20px;
        >div{
          border-radius: 50%;
          height: 100%;
        }
        .not-check{
          border:2px solid rgba(255,255,255,1);
        }
        .check{
          position: relative;
          background-color: #ffffff;
          .iconduihao {
            position: absolute;
            top: -1px;
            color: #06C161;
            font-size: 21px;
          }
        }
      }
    }
  }
</style>
