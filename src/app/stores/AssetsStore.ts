import { observable, action, runInAction, computed } from 'mobx';
import api from '../api/assets';
import { IAssetsQuery, IAssets } from './../interfaces/index';

// 网站的资源信息
class AssetsStore {
  @observable assets: (IAssets)[];
  @computed get assetsCount () {
    return this.assets.slice().length;
  }
  @computed get totalDuration () {
    let total = 0;
    this.assets.slice().forEach(item => {
      total += item.avgDuration;
    })
    return total;
  }
  @computed get totalLookupDomain () {
    let total = 0;
    this.assets.slice().forEach(item => {
      total += item.avgLookupDomain;
    })
    return total;
  }
  @computed get totalRedirect () {
    let total = 0;
    this.assets.slice().forEach(item => {
      total += item.avgRedirect;
    })
    return total;
  }
  @computed get totalRequest () {
    let total = 0;
    this.assets.slice().forEach(item => {
      total += item.avgRequest;
    })
    return total;
  }
  @computed get avgDuration () {
    return this.totalDuration / this.assetsCount
  }
  @computed get avgLookupDomain () {
    return this.totalLookupDomain / this.assetsCount
  }
  @computed get avgRedirect () {
    return this.totalRedirect / this.assetsCount
  }
  @computed get avgRequest () {
    return this.totalRequest / this.assetsCount
  }
  constructor () {
    this.assets = []
  }
  @action async getAssets (query: IAssetsQuery) {
    const { data: res } = await api.getAssetsSlow(query)
    runInAction (() => {
      this.assets = res.data;
    })
    console.log(res);
    return res;
  }
}

export default AssetsStore;