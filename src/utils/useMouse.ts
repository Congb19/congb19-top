import { ref, onMounted, onUnmounted } from 'vue';

type Position = {
  x: number;
  y: number;
};

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const update = (e: Position) => {
    x.value = e.x;
    y.value = e.y;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
