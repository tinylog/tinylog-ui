import rest from './axios';
import { ICommonDataQuery } from './../interfaces/index';

const getCommonDataQuery = (query: ICommonDataQuery) => {
  return rest.request({
    method: 'get',
    url: `/host/${query.id}/distribution/${query.type}`,
    params: {
      from: query.from,
      to: query.to
    }
  })
}

export default {
  getCommonDataQuery
}