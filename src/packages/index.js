import Button from './Button.vue';
import Icon from './Icon.vue';
import ButtonGroup from './ButtonGroup.vue';

const install = (Vue) => {
  // 把所有的组件设成全局组件
  Vue.component('t-button', Button);
  Vue.component('t-icon', Icon);
  Vue.component('t-button-group', ButtonGroup);
};

export default { install };
