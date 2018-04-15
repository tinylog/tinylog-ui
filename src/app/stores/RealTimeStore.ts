import { observable, action, runInAction } from 'mobx';
import api from '../api/realtime';
import { IRealTimeQuery, IRealTime } from '../interfaces/index';

class RealTimeStore {
  @observable realtime: IRealTime;
  constructor () {
    this.realtime = {
      count: 0,
      referrer: [],
      browserName: [],
      deviceType: [],
      country: []
    }
  }
  @action async getRealTime (query: IRealTimeQuery) {
    const { data: res} = await api.getOverViewRealTime(query);
    runInAction (() => {
      this.realtime = res.data;
    })
    return res;
  }
}

export default RealTimeStore;