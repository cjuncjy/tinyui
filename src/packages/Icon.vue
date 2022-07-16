<template>
  <svg class="t-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import '../styles/icon';
export default {
  name: 't-icon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.t-icon {
  width: 25px;
  height: 25px;
}
</style>
