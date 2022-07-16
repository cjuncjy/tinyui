<template>
  <button class="t-button" :class="btnClass" @click="$emit('click', $event)">
    <t-icon :icon="icon" class="icon" v-if="icon && !loading"></t-icon>
    <t-icon icon="loading" v-if="loading" class="icon"></t-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 't-button',
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        if (
          type &&
          !['success', 'warning', 'danger', 'info', 'primary'].includes(type)
        ) {
          console.error(
            'type类型必须为' +
              ['success', 'warning', 'danger', 'info', 'primary'].join('、')
          );
        }
        return true;
      },
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(type) {
        if (type && !['left', 'right'].includes(type)) {
          console.error('iconPosition属性必须为left或right');
        }
        return true;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`t-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`t-button-${this.iconPosition}`);
      }
      return classes;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/common.scss';

$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;

.t-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color;
    background: $background;
  }

  &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background: $background;
    outline: none;
  }

  // 按钮普通样式
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  // hover样式
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  // active和focus样式
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }

  &-left {
    svg {
      order: 1;
      margin-right: 4px;
    }
    span {
      order: 2;
    }
  }

  &-right {
    svg {
      order: 2;
    }
    span {
      margin-right: 4px;
      order: 1;
    }
  }
}
</style>
