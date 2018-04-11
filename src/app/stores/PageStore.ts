import { observable, action, runInAction } from 'mobx';
import { IPageQuery, IPage } from '../interfaces';
import api from '../api/pages';

class PageStore {
  @observable pages: (IPage)[];
  constructor () {
    this.pages = [];
  }
  @action async getPages (query: IPageQuery) {
    const { data: res } = await api.getPages(query);
    runInAction(() => {
      this.pages = res.data;
    })
    return res;
  }
}

export default PageStore;