import { History } from 'history';
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';

// 路由状态同步
class RouterStore extends BaseRouterStore {
  public history;
  constructor(history?: History) {
    super();
    if (history) {
      this.history = syncHistoryWithStore(history, this);
    }
  }
}

export default RouterStore;