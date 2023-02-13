import { defineComponent, ref, render } from 'vue';




const vnode = <button>hello</button>;
export default defineComponent({
  setup() {
    return () => (
      <>
        <div>1</div>
        <button>hello</button>
      </>
    );
  },
});
