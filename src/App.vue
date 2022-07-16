<template>
  <div id="app">
    <t-button>默认按钮</t-button>
    <t-button type="primary">默认按钮</t-button>
    <t-button type="info">默认按钮</t-button>
    <t-button type="success">默认按钮</t-button>
    <t-button type="danger">默认按钮</t-button>
    <t-button type="warning">默认按钮</t-button>
    <t-icon icon="edit"></t-icon>
    <t-icon icon="sousuo"></t-icon>
    <t-button type="warning" icon="edit" iconPosition="left">默认按钮</t-button>
    <t-button type="warning" icon="edit" iconPosition="right"
      >默认按钮</t-button
    >
    <t-button type="warning" loading>加载中</t-button>
    <t-button type="warning" @click="fn">触发事件</t-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn(e) {
      console.log(e);
    },
  },
};
</script>
