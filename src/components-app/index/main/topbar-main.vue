<template>
  <div class="cbapp-topbar cbapp-topbar--main" :style="style">
    <div class="cbapp-topbar--main__leftbtn" @click="leftClicked">
      <n-icon size="20" :component="Search"></n-icon>
    </div>
    <div class="cbapp-topbar--main__main">
      <div
        v-for="item in options"
        @click="() => optionChange(item.ID)"
        class="cbapp-topbar--main__main__item"
      >
        <span :class="item.ID == active ? '__selected' : '__unselected'" :style="item.ID == active ? '' : style_unselected">{{
          item.Title
        }}</span>
      </div>
    </div>

    <div class="cbapp-topbar--main__rightbtn" @click="rightClicked">
      <n-icon size="20" :component="List"></n-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { NIcon } from 'naive-ui';
import { Search, List } from '@vicons/ionicons5';
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
const style_unselected = computed(() => {
  const p = props.transparency!;
  return {
    opacity: 0.5,
    color: `rgb(${255 - 255 * p}, ${255 - 255 * p}, ${255 - 255 * p})`,
  };
});
const emit = defineEmits(['optionChange', 'leftClicked', 'rightClicked']);
const optionChange = (id: number) => {
  if (props.active !== id) emit('optionChange', id);
};
const leftClicked = () => {
  emit('leftClicked');
};
const rightClicked = () => {
  emit('rightClicked');
};
// console.log(active);
</script>
<style lang="scss">
.cbapp-topbar {
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 40px;
  z-index: 100;
}
.cbapp-topbar--main {
  &__leftbtn {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 6px 5px 10px 15px;
    // background-color: brown;
  }
  &__main {
    height: 40px;
    // width: 300px;
    margin: 0 45px;
    line-height: 40px;
    // background-color: indigo;
    // display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    ::-webkit-scrollbar {
      width: 0px;
    }
    &__item {
      display: inline-block;
      margin: 0 10px;
    }
  }
  &__rightbtn {
    position: absolute;
    box-sizing: border-box;
    right: 0;
    top: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 6px 15px 10px 5px;
    // background-color: brown;
  }
}

.cbapp-topbar--main__main::-webkit-scrollbar {
  display: none;
}
.__selected {
  animation: select 0.5s;
  -webkit-animation: select 0.5s;
  font-size: 18px;
  opacity: 1;
}
.__unselected {
  animation: unselect 0.5s;
  -webkit-animation: unselect 0.5s;
  font-size: 14px;
  opacity: 0.5;
}
@keyframes select {
  from {
    font-size: 14px;
  opacity: 0.5;
  }
  to {
    font-size: 18px;
  opacity: 1;
  }
}
@keyframes unselect {
  from {
    font-size: 18px;
  opacity: 1;
  }
  to {
    font-size: 14px;
  opacity: 0.5;
  }
}
</style>
