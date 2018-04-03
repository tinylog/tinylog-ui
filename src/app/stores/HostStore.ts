import { observable, action, runInAction } from 'mobx';
import api from '../api/host';
import { IHost, IHostBody } from '../interfaces';

// 当前用户使用的网站信息
class HostStore {
  @observable id;
  @observable timezone;
  @observable userId;
  @observable domain;
  @observable hosts: (IHost)[];
  constructor () {
    this.id = '';
    this.timezone = '';
    this.userId = '';
    this.domain = '';
    this.hosts = [];
  }
  @action setCurHost (index: number) {
    let host = this.hosts.slice()[index];
    this.id = host.id;
    this.timezone = host.timezone;
    this.userId = host.userId;
    this.domain = host.domain;
    localStorage.setItem('domain', host.domain);
    localStorage.setItem('hostId', host.id);
    localStorage.setItem('timezone', host.timezone);
    localStorage.setItem('userId', host.userId);
  }
  @action async patchHost (id: string) {
    try {
      const { data: res } = await api.patchHost({ id });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @action async deleteHost (id: string) {
    try {
      const { data: res } = await api.deleteHost({ id });
      return res;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
  @action async postHost (data: IHostBody) {
    try {
      const { data: res } = await api.postHost(data);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @action async getHost () {
    try {
      const { data: res } = await api.getHost();
      runInAction(() => {
        this.hosts = res.data;
        this.id = localStorage.getItem('hostId') || res.data[0].id;
        this.timezone = localStorage.getItem('timezone') || res.data[0].timezone;
        this.userId = localStorage.getItem('userId') || res.data[0].userId;
        this.domain = localStorage.getItem('domain') || res.data[0].domain;
      })
      return res;
    } catch (error) {
      console.log(error);
      return error;      
    }
  }
}

export default HostStore;
