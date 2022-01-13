<template>
  <div ref="self" class="cb-pool" v-on="dragEvent"><WallItem></WallItem></div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import WallItem from '../components/wall-item.vue';

type Position = {
  x: Number;
  y: Number;
};

const self = ref(null)
console.log(self)
// const selfPos = {x:self.value?.offsetLeft, y:self.value?.offsetTop};
// console.log(selfPos)

let pressed = ref(false);
let dragStartPoint: Position = reactive({
  x: 0,
  y: 0,
});

const moving = (pos: Position) => {
  // console.log(pos.x, pos.y);
};

const dragStart = (pos: Position) => {
  pressed.value = true;
  dragStartPoint = { x: pos.x, y: pos.y };
  console.log('dragStart', dragStartPoint);
};
const dragging = (pos: Position) => {
  // console.log(pos.x, pos.y);
};
const dragStop = (pos: Position) => {
  pressed.value = false;
  console.log('dragStop');
};
const dragEvent = ref({
  mousedown: dragStart,
  mousemove: pressed.value ? dragging : moving,
  mouseup: dragStop,
});
</script>

<style lang="scss" scoped>
.cb-pool {
  border: 0;
  margin: 0;
  padding: 0;
  background-color: aqua;
  width: 3000px;
  height: 2000px;
}
</style>
