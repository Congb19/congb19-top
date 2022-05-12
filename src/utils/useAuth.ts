import axios from 'axios';

const setAuthToken = (token: string) => {
  //如果有token就带过去
  if (token) {
    // axios写法
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('bearer ok');
  } else {
    // axios写法
    delete axios.defaults.headers.common['Authorization'];
    console.log('unbearer ok');
  }
};

export default setAuthToken;
