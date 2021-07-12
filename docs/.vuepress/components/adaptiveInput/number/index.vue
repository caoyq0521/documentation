<script>
  import { cloneDeep } from 'lodash';
  import input from '../input/index.vue';
  const props = cloneDeep(input.props); // 复制input组件的props，用于传递参数
  delete props.type;

  export default {
    functional: true,
    components: {
      AdaptInput: input
    },
    props,
    render(h, context) {
      const __props = Object.assign(context.props, { type: 'number' });
      return h('adapt-input', {
        props: __props,
        attrs: context.data.attrs,
        on: context.listeners
      });
    }
  };
</script>
