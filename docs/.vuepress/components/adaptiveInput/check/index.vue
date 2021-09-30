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
      class="content"
    >
      <van-checkbox-group v-model="picked">
        <div class="checkbox-wrap">
          <van-cell
            v-for="(option, index) in options"
            :key="option[optionValue]"
            :title="option[optionLabel]"
            clickable
            @click="toggle(index)"
          >
            <template #right-icon>
              <van-checkbox
                ref="checkboxes"
                :name="option[optionValue]"
              ></van-checkbox>
            </template>
          </van-cell>
        </div>
      </van-checkbox-group>
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
        picked: []
      };
    },
    computed: {
      position() {
        return this.$tool.isMobile() ? 'top' : 'bottom';
      },
      pickedLabel() {
        if (this.picked.length > 0) {
          const first = this.options.find(item => item[this.optionValue] === this.picked[0]);
          if (this.picked.length === 1) {
            return `${first[this.optionLabel]}`;
          }
          if (this.picked.length > 1) {
            return `${first[this.optionLabel]} (+${this.picked.length - 1})`;
          }
        }
        return '';
      }
    },
    watch: {
      value: {
        handler(val) {
          if (!val) {
            this.picked = [];
            return;
          }
          this.picked = val;
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
        this.$emit('adapt-change', this.picked);
        this.visiable = false;
      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
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
.checkbox-wrap {
  max-height: 40vh;
  overflow: auto;
}
</style>
