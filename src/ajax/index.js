import axios from "axios";
import { message } from "antd";
axios.defaults.baseURL = "http://47.101.42.80:8001/api";
axios.defaults.baseURL = "http://localhost:8001/api";

const gainError = (status) => {
	let errMsg = "";
	switch (status) {
		case 400:
			errMsg = "错误请求";
			break;
		case 401:
			errMsg = "未授权，请重新登录";
			break;
		case 403:
			errMsg = "拒绝访问";
			break;
		case 404:
			errMsg = "请求错误,未找到该资源";
			break;
		case 405:
			errMsg = "请求方法未允许";
			break;
		case 408:
			errMsg = "请求超时";
			break;
		case 500:
			errMsg = "服务器端出错";
			break;
		case 501:
			errMsg = "网络未实现";
			break;
		case 502:
			errMsg = "网络错误";
			break;
		case 503:
			errMsg = "服务不可用";
			break;
		case 504:
			errMsg = "网络超时";
			break;
		case 505:
			errMsg = "http版本不支持该请求";
			break;
		default:
			errMsg = `连接错误${status}`;
	}
	return errMsg;
};
const request = async (url, data = {}, type = "GET") => {
	let promise;
	try {
		if (type === "GET") {
			promise = await axios.get(url, { params: data });
		} else {
			promise = await axios.post(url, data);
		}
		return promise.data;
	} catch (error) {
		if (error?.response) {
			message.error(gainError(error.response.status));
		} else {
			//  message.error(`Network Error ${error}`);
		}
		if (error?.response && String(error.response.status) === "401") {
			return {
				status: "401",
			};
		}
	}
};

// http://47.101.42.80/api/date
/**
 * 日期 rqDate
 * @param null
 */
export const rqDate = async () => {
  const res = await request(`/date`, {}, "GET");
  let data;
  try {
    if (res.code === 200) {
      data = res["data"];
    }
  } catch (error) {}
  return data;
};