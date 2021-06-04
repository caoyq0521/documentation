export default {
  methods: {
    /**
     * 创建元素节点
     * @param {Object} 节点信息
     * type: 节点类型
     * tagName: 标签名
     * classList: 额外的类名
     * innerHtml: 显示内容
     * attribute: 需要设置的属性
     * dataset: 需要绑定在dataset中的数据
     * @param {Boolean} 是否是 link 类型 添加不同的类名
     * @returns {Element} 创建的元素节点
     */
    $_createElement ({ type, tagName = 'span', classList = '', innerHTML = '', attribute = {}, dataset = {} }, isLink = true) {
      const linkClassName = 'f-csp editor-insert-item editor-insert-item-link';
      const normalClassName = 'editor-insert-item';
      let resultClassList = '';
      if (isLink) resultClassList = `${linkClassName} ${classList}`;
      else resultClassList = `${normalClassName} ${classList}`;
      const contentElement = document.createElement(tagName);
      contentElement.classList = resultClassList;
      contentElement.innerHTML = innerHTML;
      for (const [key, value] of Object.entries(attribute)) {
        contentElement.setAttribute(key, value);
      }
      for (const [key, value] of Object.entries(dataset)) {
        contentElement.setAttribute(`data-${key}`, value);
      }
      contentElement.setAttribute('contenteditable', false);
      contentElement.setAttribute('data-type', type);
      return contentElement;
    }
  }
}
