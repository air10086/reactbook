import api from '../config';
import axios from 'axios';
// import Cookies from 'js-cookie';

const baseURL = 'http://127.0.0.1:3000';

// const userId = Cookies.get('userId');
// const token = Cookies.get('token');

export default function ask(name, opt = {}) {
  //取传进来的用户信息
  let { headers, data, params, responseType } = opt;
  params = params || {};
  data = data || {};
  // params.token = Cookies.get('token');
  // params.userId = Cookies.get('userId');
  // data.token = Cookies.get('token');
  // data.userId = Cookies.get('userId');

  params = Object.assign(
    {},
    {
      // 请求令牌
      // token,
      // 用户ID
      // userId
    },
    params
  );

  data = Object.assign(
    {},
    {
      // 请求令牌
      // token,
      // 用户ID
      // userId
    },
    data
  );

  /**
   * 获取接口信息
   * 如果后期涉及到权限
   * 可以在接口信息里面
   * 设定 并取到
   */
  let { method, url } = api[name];

  let instance = axios.create({
    baseURL,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false
  });

  // 响应中间处理层
  instance.interceptors.response.use(
    function(response) {
      // 请求成功后 处理在此
      console.log(response);
      return response.data;
    },
    function(error) {
      // 请求失败 错误在此

      return Promise.reject(error);
    }
  );

  let promise = instance.request({
    responseType,
    url,
    method,
    headers,
    params,
    data
  });

  return promise;
}
