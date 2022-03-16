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

<style lang="scss" scoped>
.c-tag {
  display: inline-block;
  border: 1px red solid;
  border-width: 1px;
  padding: 0 5px 0 5px;
  // border-radius: 3px;
}
.c-tag--s {
  font-size: 10px;
  height: 20px;
  line-height: 20px;
}
.c-tag--m {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
}
.c-tag--l {
  font-size: 18px;
}
.c-tag--xl {
  font-size: 22px;
}
.c-tag--round{
  border-radius: 11px;
}
</style>