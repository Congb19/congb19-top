import req from './request';

import apiList from './apilist';

export const getHappinessList = async () => {
  let res = await req('GET', apiList.kbn.getHappinessList, {});
  return res;
};
export const postInfo = async (params: object) => {
  let res = await req('POST', apiList.kbn.postInfo, params);
  return res;
};
