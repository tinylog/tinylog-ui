import rest from './axios';
import { IAssetsQuery } from '../interfaces';

const getAssetsSlow = (query: IAssetsQuery) => {
  return rest.request({
    method: 'get',
    url: `/host/${query.id}/assets/slow`,
    params: {
      from: query.from,
      to: query.to
    }
  })
}

export default {
  getAssetsSlow
}