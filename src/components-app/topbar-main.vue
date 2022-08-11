<template>
  <div class="cbapp-topbar cbapp-topbar--main" :style="style">
    <div v-for="item in options" @click="() => optionChange(item.id)">
      {{ item.name }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
const props = defineProps<{
  active?: number;
  transparency?: number;
  options?: any[];
}>();
const style = computed(() => {
  const p = props.transparency!;
  return {
    backgroundColor: `rgba(255, 255, 255, ${p})`,
    color: `rgb(${255 - 255 * p}, ${255 - 255 * p}, ${255 - 255 * p})`,
  };
});
const emit = defineEmits(['optionChange']);
const optionChange = (id: number) => {
  if (props.active !== id) emit('optionChange', id);
};
// console.log(active);
</script>
<style>
.cbapp-topbar {
  /* background-color: aquamarine; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
}
</style>
