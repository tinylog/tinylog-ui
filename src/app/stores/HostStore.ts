import { observable, action, runInAction } from 'mobx';
import api from '../api/host';

class HostStore {
  @observable id;
  @observable timezone;
  @observable userId;
  @observable website;
  constructor () {
    this.id = '';
    this.timezone = '';
    this.userId = '';
    this.website = '';
  }
  @action async getHost () {
    try {
      const { data: res } = await api.getHost();
      // !important mark
      runInAction(() => {
        this.id = res.data[0].id;
        this.timezone = res.data[0].timezone;
        this.userId = res.data[0].userId;
        this.website = res.data[0].website;
      })
      return res;
    } catch (error) {
      console.log(error);
      return error;      
    }
  }
}

export default HostStore;
