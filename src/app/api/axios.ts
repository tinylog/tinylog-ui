import axios from 'axios';
import { message } from 'antd';

axios.interceptors.request.use(function (config: any) {
  config.baseURL = 'https://tinylog.ruiming.me';
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response: any) {
  const data = response.data;
  response.data = {}
  response.data.code = 200;
  response.data.data = data;
  return response;
}, function (error: any) {
  message.info(error.response.data.message || '服务器连接异常')
  return Promise.reject({
    code: error.response.status,
    msg: error.response.data.message
  });
});

export default axios;