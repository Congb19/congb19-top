// store模式
import { reactive } from 'vue';

const exampleStore = {
  debug: true,

  // 采用reactive造state
  state: reactive({
    message: 'testmsg',
  }),

  // action示例
  setMessageAction(newValue: string) {
    if (this.debug) {
      console.log('setMessageAction triggered with', newValue);
    }
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) {
      console.log('clearMessageAction triggered');
    }
    this.state.message = '';
  },
};

export default exampleStore;
