// import Button from './Button.vue';
// import Icon from './Icon.vue';
// import ButtonGroup from './ButtonGroup.vue';

import Vue from 'vue';

const install = (Vue) => {
  // 把所有的组件设成全局组件
  // Vue.component(Button.name, Button);
  // Vue.component(Icon.name, Icon);
  // Vue.component(ButtonGroup.name, ButtonGroup);
  const requireComponent = require.context('.', true, /\.vue/); // 当前目录，遍历子目录，以.vue结尾的文件
  requireComponent.keys().forEach((fileName) => {
    const config = requireComponent(fileName);
    // config:
    // {
    //   default: {
    //     name: 't-button',
    //     staticRenderFns: [],
    //     _compiled: true,
    //     beforeCreate: [null],
    //     beforeDestroy: [null],
    //     __file: 'src/packages/Button.vue',
    //     _Ctor: {},
    //   },
    // };
    Vue.component(config.default.name, config.default);
  });
};

// script引入的
if (typeof window.vue !== 'undefined') {
  install(Vue);
}

export default { install };
