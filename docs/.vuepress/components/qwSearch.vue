<template>
  <div>
    <van-search
      ref="search"
      v-bind="$attrs"
      :clearable="false"
      :value="curValue"
      v-on="$listeners"
    >
      <template #right-icon>
        <van-icon
          v-if="curValue.trim().length"
          class="clear-icon"
          name="clear"
          @click="clearHandle"
        />
      </template>

    </van-search>
  </div>
</template>

<script>
  export default {
    components: {

    },
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        curValue: ''
      };
    },
    computed: {
    },
    watch: {
      value: {
        handler(cur) {
          this.curValue = cur;
        }
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      clearHandle() {
        this.curValue = '';
        // this.$attrs.value = '';
        this.$emit('input', this.curValue);
        this.$emit('search', this.curValue);
      }
    }
  };
</script>

<style scoped lang="scss">
.clear-icon {
  cursor: pointer;
  color: #c9c9c9;
}
</style>
