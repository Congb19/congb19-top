<script lang="ts">
export default {
  name: 'CButton',
};
</script>
<script setup lang="ts">
const props = defineProps({
  onClick: Function,
});
const className = `c-button c-button--regular`;
const handleClick = () => {
  if (props.onClick) props.onClick();
};
</script>

<template>
  <component :class="className" @click="handleClick">
    <slot>按钮</slot>
  </component>
</template>

<style lang="scss" src="./button.scss"></style>
