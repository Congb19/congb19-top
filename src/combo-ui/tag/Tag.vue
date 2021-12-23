<script lang="ts">
export default {
  name: 'CTag',
};
</script>
<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
  // appearance
  size: {
    type: String as PropType<'s' | 'm' | 'l' | 'xl'>,
    default: 'm',
  },
  color: {
    type: String,
    default: '#aa0000',
  },
  round: {
    type: Boolean,
    default: false,
  },

  // action
});
const className = `c-tag c-tag--${props.size} ${props.round?'c-tag--round':null} `;
</script>

<template>
  <div :class="className">
    <slot>标签</slot>
  </div>
</template>

<style lang="sass" src="./tag.scss" scoped></style>