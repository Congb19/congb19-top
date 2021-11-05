// store模式
import { reactive, ref } from 'vue';
import { login } from '../api';

const exampleStore = {
  debug: true,

  // 采用reactive造state
  state: reactive({
    message: ref('testmsg'),
    auth: {
      token: '',
    },
  }),

  resetAuth() {
    this.state.auth.token = '';
  },

  async signIn(props: { username: string; password: string }) {
    let res = await login(props);
    if (res.status == 200) {
      if (this.debug) console.log('signin ok with', props);
      this.state.auth = res.data;
    }
  },
};

export default exampleStore;
