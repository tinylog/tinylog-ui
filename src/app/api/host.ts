import rest from './axios';
import { IOverviewQuery } from '../interfaces'
import { IHostBody } from '../interfaces';

const getHost = () => {
  return rest.request({
    method: 'get',
    url: '/host'
  });
};

const postHost = (data: IHostBody) => {
  return rest.request({
    method: 'post',
    url: '/host/create',
    data
  })
}

const deleteHost = (data: IHostBody) => {
  return rest.request({
    method: 'delete',
    url: '/host',
    data: {
      list: [data.id]
    }
  })
}

const getOverview = (query: IOverviewQuery) => {
  return rest.request({
    method: 'get',
    url: `/host/${query.id}/overview`,
    params: {
      from: query.from,
      to: query.to
    }
  })
}

export default {
  getHost,
  getOverview,
  postHost,
  deleteHost
}