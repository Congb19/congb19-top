import axios, { AxiosResponse } from 'axios';

import { snakeCase, camelCase } from 'lodash';

// import {
//   createDiscreteApi,
//   // ConfigProviderProps,
// } from 'naive-ui';
// const { message } = createDiscreteApi(['message']);

const config = {
  baseURL: import.meta.env.DEV
    ? 'http://localhost:8003/api'
    : 'http://api.congb19.com:8003/api',
  // baseURL: 'http://api.congb19.com:8003/api'
};
const request = axios.create(config);

request.interceptors.response.use(
  (response) => {
    return transform(response);
  },
  (error) => {
    window.$message.error('网络错误');
    return transform(error);
  }
);

const req = async (method: 'GET' | 'POST', url: string, params?: object) => {
  let res: AxiosResponse<any>;
  switch (method) {
    case 'GET':
      res = await request.get(url);
      break;
    case 'POST':
      res = await request.post(url, params);
      break;
  }
  return res;
};

const transform = (res: any) => {
  if (Object.prototype.toString.call(res) !== '[object Object]') return res;
  let result: any = {};
  Object.keys(res).forEach((key: string) => {
    let newKey = camelCase(key);
    if (Object.prototype.toString.call(res[key]) === '[object Object]') {
      result[newKey] = transform(res[key]);
    } else if (Object.prototype.toString.call(res[key]) === '[object Array]') {
      result[newKey] = res[key].map((item: any) => transform(item));
    } else result[newKey] = res[key];
  });
  return result as AxiosResponse<any>;
};

export default req;
