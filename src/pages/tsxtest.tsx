import { defineComponent, ref, render } from 'vue';
const vnode = <button>hello</button>;
export default defineComponent({
  setup() {},
  render() {
    return <div>{vnode}</div>;
  },
});
