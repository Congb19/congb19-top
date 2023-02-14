import { AxiosResponse } from 'axios';
import req from './request';

import { getList } from '@/types/global';
import { kbnInfo } from '@/types/kbn';

const apiList = {
  auth: {
    login: '/auth/login',
  },
  kbn: {
    getHappinessList: '/kbn/getHappinessList',
    postKbn: '/kbn/postKbn',
  },
};

export const getHappinessList = async () => {
  let res: AxiosResponse<getList<kbnInfo>> = await req(
    'GET',
    apiList.kbn.getHappinessList
  );
  return res.data;
};
export const postKbn = async (params: object) => {
  let res = await req('POST', apiList.kbn.postKbn, params);
  return res;
};
export const login = async (params: object) => {
  let res = await req('POST', apiList.auth.login, params);
  return res;
};
