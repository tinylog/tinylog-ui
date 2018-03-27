import rest from './axios';

const getWebSites = () => {
  return rest.request({
    method: 'get',
    url: '/host',
    headers: {
      'XSRF-TOKEN': localStorage.getItem('token')
    }
  });
};

export default {
  getWebSites
}