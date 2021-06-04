<template>
  <div class="switch-table-component">
    <div
      v-for="item in availableOptions"
      :key="item.key"
      @click="handleChangeKey(item)"
    >
      <span :class="['switch-item', {[activeClassName]: (currentKey === item.key)}]">{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
class CheckOptions {
  constructor (status = false, options = []) {
    this.status = status;
    this.options = options;
  }

  validator () {
    let flag = true;
    if (this.status) {
      flag = this.options.every(item => !!item.path?.trim());
    }
    if (!flag) throw new Error("options每一项中必须包含 path 属性");
    return flag;
  }
}
const optionsValidator = new CheckOptions();
const TYPE_ARR = ['card', 'underline'];
const BASE_CLASS_NAME = '-active-item';
export default {
  name: 'HjSwitchTable',
  props: {
    type: {
      type: String,
      default: 'card',
      validator (value) {
        return TYPE_ARR.includes(value);
      }
    },
    // 是否根据路由保持状态
    keepStatus: {
      type: Boolean,
      default: false,
      validator (value) {
        optionsValidator.status = value;
        return true;
      }
    },
    options: {
      type: Array,
      default: () => [
        {
          key: 1,
          title: '个人文章'
        },
        {
          key: 2,
          title: '企业文章'
        }
      ],
      validator (value) {
        optionsValidator.options = value;
        return optionsValidator.validator();
      }
    },
    defaultKey: {
      type: [Number, String],
      default: () => 0
    },
    emitType: {
      type: String,
      default: () => 'key' // key: 返回 key 值  origin: 返回原始字段
    },
    // 是否监听路由变化 该组件嵌套是请设置为false
    isWatchRoute: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      setKey: this.defaultKey,
      activeClassName: ''
    }
  },
  computed: {
    availableOptions () {
      return this.options.filter(item => {
        if (item.role) return this.$tool.hasRole(item.role);
        return true;
      });
    },
    currentKey: {
      set (val) {
        this.setKey = val;
      },
      get () {
        return this.setKey || this.availableOptions[0].key;
      }
    }
  },
  watch: {
    defaultKey (val) {
      if (val) this.setKey = val
    },
    '$route' (val) {
      if (this.isWatchRoute) {
        this.handleRouteChange()
      }
    }
  },
  mounted () {
    if (this.keepStatus) this.initData();
    this.activeClassName = `${this.type}${BASE_CLASS_NAME}`;
  },
  methods: {
    handleChangeKey (option, isInit = false) {
      if (!isInit && (option.key === this.currentKey)) return;

      this.currentKey = option.key;

      if (this.keepStatus && (this.$route.fullPath !== option.path)) {
        let path = option.path
        if (this.$route.query.guideToOpenFlag) {
          path = path + "&guideToOpenFlag=" + this.$route.query.guideToOpenFlag
        }
        if (this.$route.fullPath !== path) {
          this.$router.push(path);
        }
      }
      if (this.emitType === 'origin') {
        this.$emit('switchTableChange', option);
        return;
      }
      this.$emit('switchTableChange', option.key);
    },
    initData () {
      const fullPath = this.$route.fullPath;
      let cur = this.availableOptions.filter(ele => fullPath.includes(ele.path))[0];
      if (!cur) {
        cur = this.availableOptions[0];
      }
      this.handleChangeKey(cur, true);
    },
    handleRouteChange () {
      const fullPath = this.$route.fullPath;
      console.log(fullPath)
      const cur = this.availableOptions.filter(ele => fullPath.includes(ele.path))[0];
      if (cur) {
        this.handleChangeKey(cur, true);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.switch-table-component {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .switch-item {
    margin-right: 22px;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    float: left;
  }

  .card-active-item {
    width: 116px;
    font-weight: 600;
    color: #ffffff;
    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.12),0px 4px 10px 0px rgba(52,112,255,0.5);
    border-radius: 5px;
    background: #3470ff;
  }

  .underline-active-item {
    position: relative;
    padding: 0;
    font-size: 16px;
    color:#3470FF;
    font-weight: 600;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30px;
      height: 3px;
      border-radius: 5px;
      background-color: #3470FF;
    }
  }
}
</style>
