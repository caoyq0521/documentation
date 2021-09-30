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
      <van-datetime-picker
        v-model="picked"
        v-bind="$attrs"
        :show-toolbar="false"
        :type="type"
      ></van-datetime-picker>
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
  import { output, input } from './formatter.js';
  export default {
    props: {
      value: {
        type: undefined,
        default: undefined
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      type: {
        type: String,
        default: 'date'
      },
      mode: {
        type: [Number, String],
        default: undefined
      }
    },
    data() {
      return {
        visiable: false,
        pickedLabel: '',
        picked: ''
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
          if(!val){
            return this.picked = new Date()
          }
          this.picked = input[this.type](val);
          this.pickedLabel = val;
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
      cancel() {
        this.visiable = false;
      },
      confirm() {
        const formatter = output[this.type];
        this.pickedLabel = formatter(this.picked);
        this.$emit('adapt-change', this.pickedLabel);
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
