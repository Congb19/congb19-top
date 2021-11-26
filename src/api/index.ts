import req from './request';

import { apiList } from './apilist';

export const getHappinessList = async () => {
  let res = await req('GET', apiList.kbn.getHappinessList, {});
  return res;
};
export const postKbn = async (params: object) => {
  let res = await req('POST', apiList.kbn.postKbn, params);
  return res;
};
export const login = async (params: object) => {
  let res = await req('POST', apiList.auth.login, params);
  return res;
};
