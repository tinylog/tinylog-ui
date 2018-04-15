import rest from './axios';
import { IRealTimeQuery } from '../interfaces';

const getOverViewRealTime = (query: IRealTimeQuery) => {
  return rest.request({
    method: 'get',
    url: `/realtime/${query.id}/overview`
  })
}

export default {
  getOverViewRealTime
}