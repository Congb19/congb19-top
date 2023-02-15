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
  // 如果失败，在之前被拦截，则res没有data属性，则会返回一个undefined。
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
