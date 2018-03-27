import { observable, action } from 'mobx';
import api from '../api/baseMsg';

class BaseMsgStore {
  @observable name;
  @action async getWebSites () {
    const res = await api.getWebSites();
    console.log(res)
  }
}

export default BaseMsgStore;
