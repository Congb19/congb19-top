<template>
  <div class="cbapp-tabbar__item">
    {{ item.title }}
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  item: any;
}>();
console.log(props.item);
</script>
<style lang="scss" scoped>
.cbapp-tabbar__item {
  height: 50px;
  width: 100%;
  background-color: brown;
}
</style>
