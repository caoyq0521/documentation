<script>
import config from './config';
import AdaptUnknow from './unknow';
import AdaptInput from './input';
import AdaptPicker from './picker';
import AdaptDate from './date';
import AdaptCheck from './check';
import AdaptNumber from './number';
import AdaptMultiline from './multiline';
import AdaptDatetime from './datetime';

export default {
  name: 'AdaptiveInput',
  components: {
    AdaptUnknow,
    AdaptInput,
    AdaptPicker,
    AdaptDate,
    AdaptCheck,
    AdaptNumber,
    AdaptMultiline,
    AdaptDatetime
  },
  props: {
    value: {
      type: undefined,
      default: undefined
    },
    mode: {
      type: [Number, String],
      default: undefined
    }
  },
  data () {
    return {
      localVal: ''
    };
  },
  methods: {
    change (val) {
      this.$emit('input', val);
    }
  },
  created () {
    console.log('adaptive')
  },
  render (h) {
    const tag = `adapt-${config[this.mode] || 'unknow'}`;
    return h(tag, {
      props: this.$props,
      attrs: this.$attrs,
      on: {
        'adapt-change': this.change
      }
    });
  }
};
</script>
