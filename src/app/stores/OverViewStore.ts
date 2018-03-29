import { observable, action, runInAction } from 'mobx';
import api from '../api/host';
import { IOverview, IOverviewQuery } from '../interfaces';
import moment from 'moment';

class OverViewStore {
  @observable overviews: (IOverview)[];
  constructor () {
    this.overviews = []
  }
  @action async getOverview (query: IOverviewQuery) {
    const { data: res } = await api.getOverview(query)
    runInAction (() => {
      // mobx 的数据被封装过，使用需要slice一下: console.log(this.overviews.slice())
      this.overviews = res.data.map(item => {
        item.date = moment(item.date).format('YY-MM-DD')
        return item
      })
    })
    return res;
  }
}

export default OverViewStore