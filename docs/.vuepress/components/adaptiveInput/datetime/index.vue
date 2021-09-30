<script>
  import { cloneDeep } from 'lodash';
  import date from '../date/index.vue';
  const props = cloneDeep(date.props); // 复制input组件的props，用于传递参数
  delete props.type;

  export default {
    functional: true,
    components: {
      AdaptDate: date
    },
    props,
    render(h, context) {
      const __props = Object.assign(context.props, { type: 'datetime' });
      return h('adapt-date', {
        props: __props,
        attrs: context.data.attrs,
        on: context.listeners
      });
    }
  };
</script>
