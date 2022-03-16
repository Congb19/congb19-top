// store模式
import { reactive, ref } from 'vue';
import { login } from '../api';

const exampleStore = {
  debug: true,

  // 采用reactive造state
  state_auth: reactive({
    message: ref('testmsg'),
    auth: {
      isAdmin: true,
      token: '',
    },
  }),

  state_app: reactive({
    path: ref('/'),
  }),

  resetAuth() {
    this.state_auth.auth.token = '';
    this.state_auth.auth.isAdmin = false;
  },

  async signIn(props: { key: string }) {
    let res = await login(props);
    if (res.status == 200) {
      if (import.meta.env.DEV) console.log('signin ok with key: ', props);
      // this.state.auth = res.data;
    }
  },
};

export default exampleStore;
