<template>
  <div class="adapt-picker">
    <!-- 显示层 -->
    <van-field
      v-bind="$attrs"
      class="adapt-picker"
      clickable
      @click="open"
    >
      <template #input>
        <div
          class="picked"
          :data-placeholder="placeholder"
          :class="{ empty: !pickedLabel }"
        >
          {{ pickedLabel }}
        </div>
      </template>
      <template #right-icon>
        <van-icon name="arrow"></van-icon>
      </template>
    </van-field>
    <!-- 弹出层 -->
    <van-popup
      v-model="visiable"
      get-container="body"
      :position="position"
    >
      <van-picker
        :default-index="picked"
        :show-toolbar="false"
        :columns="columns"
        @change="onPickedChange"
      ></van-picker>
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
      options: {
        type: Array,
        default: () => []
      },
      optionLabel: {
        type: String,
        default: 'label'
      },
      optionValue: {
        type: String,
        default: 'value'
      },
      placeholder: {
        type: String,
        default: '请选择'
      }
    },
    data() {
      return {
        visiable: false,
        picked: 0,
        pickedLabel: ''
      };
    },
    computed: {
      position() {
        return this.$tool.isMobile() ? 'top' : 'bottom';
      },
      columns() {
        return this.options.map(item => item[this.optionLabel]);
      }
    },
    watch: {
      value: {
        handler(val) {
          if (!val) {
            this.picked = 0;
            return;
          }
          const idx = this.options.findIndex(item => item[this.optionValue] === val);
          if (idx > -1) {
            this.picked = idx;
            this.pickedLabel = this.options[idx][this.optionLabel];
          }
        },
        immediate: true
      }
    },
    created() {

    },
    methods: {
      open() {
        this.visiable = true;
      },
      onPickedChange(picker, value, index) {
        this.picked = index;
      },
      cancel() {
        this.visiable = false;
      },
      confirm() {
        const checked = this.options[this.picked];
        this.$emit('adapt-change', checked[this.optionValue]);
        this.visiable = false;
      }
    }
  };
</script>
<style lang='scss' scoped>
.content {
  font-size: 12px;
}
.picked {
  &.empty::after {
    display: block;
    content: attr(data-placeholder);
    color: #d6d6d6;
  }
}
.footer {
  display: flex;
  & > * {
    flex: 1;
    border-radius: 0;
  }
}
</style>
