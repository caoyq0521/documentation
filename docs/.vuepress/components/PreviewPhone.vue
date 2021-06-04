<template>
  <div class="preview-phone">
    <div class="preview-show-area">
      <div class="preview-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewPhone"
};
</script>

<style lang="scss" scoped>
.preview-phone {
  width: 395px;
  margin: 0 auto;
  border: 10px solid #000000;
  box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.3);
  border-radius: 40px;
  overflow: hidden;
  background-color: #ffffff;
  .preview-show-area {
    width: 384px;
  }
  .preview-content {
    width: 375px;
    height: 667px;
  }
}
</style>
