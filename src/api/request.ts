import axios, { AxiosResponse } from 'axios';

import { snakeCase, camelCase } from 'lodash';

const config = {
  baseURL: import.meta.env.DEV
    ? 'http://localhost:8003/api'
    : 'http://www.congb19.com/api',
};
const request = axios.create(config);

const req = async (method: 'GET' | 'POST', url: string, params: object) => {
  let res: AxiosResponse<any>;
  switch (method) {
    case 'GET':
      res = await request.get(url);
      break;
    case 'POST':
      res = await request.post(url, params);
      break;
  }
  return transform(res);
};

const transform = (res: any) => {
  let result: any = {};
  if (Object.prototype.toString.call(res) !== '[object Object]') return res;
  Object.keys(res).forEach((key: string) => {
    if (Object.prototype.toString.call(res[key]) === '[object Object]') {
      res[key] = transform(res[key]);
    } else if (Object.prototype.toString.call(res[key]) === '[object Array]') {
      res[key] = res[key].map((item: any) => transform(item));
    } else result[camelCase(key)] = res[key];
  });
  return result;
};

export default req;
