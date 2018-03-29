import rest from './axios';
import { IOverviewQuery } from '../interfaces'

const getHost = () => {
  return rest.request({
    method: 'get',
    url: '/host'
  });
};

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
  getOverview
}