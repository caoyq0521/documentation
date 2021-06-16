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
};