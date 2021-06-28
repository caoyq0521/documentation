import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vant from 'vant';
import 'vant/lib/index.css';

import './public/fontIcon/iconfont.css';
import './public/styles/index.scss';
import HjBaseRichText from './components/hjBaseRichText/index';
import EmojiPicker from './components/emojiPicker/index';

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(Vant);
  Vue.component('hj-base-rich-text', HjBaseRichText);
  Vue.component('emoji-picker', EmojiPicker);

  router.beforeEach((to, from, next) => {
    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
        console.log("上报百度统计", to.fullPath);
      }
    }
    next();
  });
};