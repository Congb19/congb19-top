// store模式
import { reactive, ref } from 'vue';
import { login } from '../api';

const exampleStore = {
  debug: true,

  // 采用reactive造state
  state: reactive({
    message: ref('testmsg'),
    auth: {
      isAdmin: true,
      token: '',
    },
  }),

  resetAuth() {
    this.state.auth.token = '';
    this.state.auth.isAdmin = false;
  },

  async signIn(props: { key: string }) {
    let res = await login(props);
    if (res.status == 200) {
      if (this.debug) console.log('signin ok with key: ', props);
      // this.state.auth = res.data;
    }
  },
};

export default exampleStore;
