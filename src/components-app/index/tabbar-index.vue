<template>
  <div class="cbapp-tabbar">
    <TabbarItem
      :item="options![0]"
      @click="() => click(options![0].path)"
    ></TabbarItem>
    <TabbarItem
      :item="options![1]"
      @click="() => click(options![1].path)"
    ></TabbarItem>
    <div class="cbapp-tabbar__new">+</div>
    <TabbarItem
      :item="options![2]"
      @click="() => click(options![2].path)"
    ></TabbarItem>
    <TabbarItem
      :item="options![3]"
      @click="() => click(options![3].path)"
    ></TabbarItem>
  </div>
</template>
<script setup lang="ts">
import TabbarItem from './tabbar-item.vue';
const props = defineProps<{
  options?: any[];
}>();
const emits = defineEmits(['change']);
const click = (path: string) => {
  emits('change', path);
};
</script>
<style lang="scss" scoped>
.cbapp-tabbar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  background-color: #F8F8F8;
  display: flex;
  :nth-child(n) {
    width: 20%;
  }
  &__new{
    // width: 55px;
  }
}
</style>
