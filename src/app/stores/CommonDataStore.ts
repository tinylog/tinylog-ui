import { observable, action } from 'mobx';
import api from '../api/commonData';
import { ICommonData, ICommonDataQuery } from './../interfaces/index';

// 网站的性能信息
class CommonDataStore {
  @observable referrer: (ICommonData)[];
  @observable country: (ICommonData)[];
  @observable lang: (ICommonData)[];
  @observable region: (ICommonData)[];
  @observable city: (ICommonData)[];
  @observable osName: (ICommonData)[];
  @observable browserName: (ICommonData)[];
  @observable engineName: (ICommonData)[];
  @observable hostname: (ICommonData)[];
  @observable org: (ICommonData)[];
  @action async getReffer (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'referrer' });
    console.log(res)
  }
  @action async getCountry (query: ICommonDataQuery) {
    const { data: res} = await api.getCommonDataQuery({ ...query, type: 'country' });
    console.log(res)
  }
  @action async getLang (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'lang' });
    console.log(res)
  }
  @action async getRegion (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'region' });
    console.log(res)
  }
  @action async getCity (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'city' });
    console.log(res)
  }
  @action async getOs (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'osName' });
    console.log(res)
  }
  @action async getBrowser (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'browserName' });
    console.log(res)
  }
  @action async getEngine (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'engineName' });
    console.log(res)
  }
  @action async getHost (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'hostname' });
    console.log(res)
  }
  @action async getOrg (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'org' });
    console.log(res)
  }
}

export default CommonDataStore;
