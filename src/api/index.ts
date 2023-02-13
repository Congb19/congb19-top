import req from './request';
import { kbnList } from '@/types/kbn';

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
  // let res = await req('GET', apiList.kbn.getHappinessList, {});
  let test: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: 'getHappinessList',
        code: 200,
        data: [
          {
            type: 1,
            floor: 1,
            content: '今天吃了饭',
            createdTime: '20210924',
            authorName: 'lyc',
          },
          {
            type: 1,
            floor: 2,
            content: '今天吃饭了',
            createdTime: '20210924',
            authorName: 'lyc2',
          },
        ],
      });
    }, 1000);
  });
  let res = await test;
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
