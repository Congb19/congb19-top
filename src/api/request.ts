import axios, { AxiosResponse } from 'axios';

const req = async (method: 'GET' | 'POST', url: string, params: object) => {
  let res: AxiosResponse<any>;
  switch (method) {
    case 'GET':
      res = await axios.get(url);
    case 'POST':
      res = await axios.post(url, params);
  }
  return {
    status: res.status,
    data: res.data,
  };
};

export default req;
