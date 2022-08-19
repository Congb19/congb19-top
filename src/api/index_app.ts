import axios, { AxiosResponse } from 'axios';

// interface Response {
//   status: number;
//   data: object;
//   msg: string;
// }

const config = {
  // baseURL: import.meta.env.DEV
  //   ? 'http://localhost:8003/api'
  //   : 'http://api.congb19.com:8003/api',
  baseURL: 'http://api.congb19.com:8003/api',
};
const request = axios.create(config);
const req = async (method: 'GET' | 'POST', url: string, params?: object) => {
  // let res: AxiosResponse<any>;
  let res: any;
  switch (method) {
    case 'GET':
      res = await request.get(url);
      break;
    case 'POST':
      res = await request.post(url, params);
      break;
  }
  console.log(res);
  return res
};

export const PUBLIC = {
  getClubs: async () => {
    let res = await req('GET', `/public/getClubs`);
    return res.data;
  },
  getTools: async (id: number) => {
    let res = await req('GET', `/public/getTools?id=${id}`);
    return res.data;
  },
  getPins: async (id: number) => {
    let res = await req('GET', `/public/getPins?id=${id}`);
    return res.data;
  },
  getArticles: async (id: number, count: number) => {
    let res = await req('GET', `/public/getArticles?id=${id}&count=${count}`);
    return res.data;
  },
};
