import axios, { AxiosResponse } from 'axios';

interface Response {
  status: number;
  data: object;
  message: string;
}

const config = {
  baseURL: import.meta.env.DEV
    ? 'http://localhost:8003/api'
    : 'http://www.congb19.com/api',
};
const request = axios.create(config);

const req = async (method: 'GET' | 'POST', url: string, params: object) => {
  // let res: AxiosResponse<any>;
  let res: Response;
  switch (method) {
    case 'GET':
      res = await request.get(url);
      break;
    case 'POST':
      res = await request.post(url, params);
      break;
  }
  return res;
  return {
    status: res.status,
    data: res.data,
  };
};

export default req;
