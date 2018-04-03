import { observable, action, runInAction, computed } from 'mobx';
import { IPageQuery, IPage } from '../interfaces';
import api from '../api/pages';

class PageStore {
  @observable pages: (IPage)[];
  constructor () {
    this.pages = [];
  }
  @computed pageCount () {
    return this.pages.slice().length;
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