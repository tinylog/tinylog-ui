import axios from 'axios';

axios.interceptors.request.use(function (config: any) {
  config.baseURL = 'https://tinylog.ruiming.me';
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response: any) {
  return response;
}, function (error: any) {
  return Promise.reject(error);
});

export default axios;