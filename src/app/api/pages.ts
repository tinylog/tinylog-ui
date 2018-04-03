import rest from './axios';
import { IPageQuery } from '../interfaces';

const getPages = (query: IPageQuery) => {
  return rest.request({
    method: 'get',
    url: `/host/${query.id}/pages/slow`,
    params: {
      from: query.from,
      to: query.to
    }
  })
}

export default {
  getPages
}