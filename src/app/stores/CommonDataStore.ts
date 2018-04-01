import { observable, action, runInAction } from 'mobx';
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
  constructor () {
    this.referrer = [];
    this.country = [];
    this.lang = [];
    this.region = [];
    this.city = [];
    this.osName = [];
    this.browserName = [];
    this.engineName = [];
    this.hostname = [];
    this.org = [];
  }
  @action async getReffer (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'referrer' });
    runInAction(() => {
      this.referrer = res.data.map(item => {
        return {
          value: item.referrer,
          count: item.count
        }
      })
    })
  }
  @action async getCountry (query: ICommonDataQuery) {
    const { data: res} = await api.getCommonDataQuery({ ...query, type: 'country' });
    runInAction(() => {
      this.country = res.data.map(item => {
        return {
          value: item.country,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getLang (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'lang' });
    runInAction(() => {
      this.lang = res.data.map(item => {
        return {
          value: item.lang,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getRegion (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'region' });
    runInAction(() => {
      this.region = res.data.map(item => {
        return {
          value: item.region,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getCity (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'city' });
    runInAction(() => {
      this.city = res.data.map(item => {
        return {
          value: item.city,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getOs (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'osName' });
    runInAction(() => {
      this.osName = res.data.map(item => {
        return {
          value: item.osName,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getBrowser (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'browserName' });
    runInAction(() => {
      this.browserName = res.data.map(item => {
        return {
          value: item.browserName,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getEngine (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'engineName' });
    runInAction(() => {
      this.engineName = res.data.map(item => {
        return {
          value: item.engineName,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getHost (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'hostname' });
    runInAction(() => {
      this.hostname = res.data.map(item => {
        return {
          value: item.hostname,
          count: item.count
        }
      })
    })
    console.log(res)
  }
  @action async getOrg (query: ICommonDataQuery) {
    const { data: res } = await api.getCommonDataQuery({ ...query, type: 'org' });
    runInAction(() => {
      this.org = res.data.map(item => {
        return {
          value: item.org,
          count: item.count
        }
      })
    })
    console.log(res)
  }
}

export default CommonDataStore;
