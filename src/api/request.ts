import axios, { AxiosResponse } from 'axios';

interface Response {
  status: number,
  data: object,
  message: string
}

const req = async (method: 'GET' | 'POST', url: string, params: object) => {
  // let res: AxiosResponse<any>;
  let res: Response;
  switch (method) {
    case 'GET':
      res = await axios.get(url);
      break;
    case 'POST':
      res = await axios.post(url, params);
      break;
  }
  return {
    status: res.status,
    data: res.data,
  };
};

export default req;
