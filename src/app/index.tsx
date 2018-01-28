import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { TimerStore } from './stores';
import registerServiceWorker from './registerServiceWorker';

import { Root } from './containers/Root';
import View from './View';
import View2 from './View2';

useStrict(true);

const browserHistory = createBrowserHistory();
const routerStore =  new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);
const rootStore = {
  timer: new TimerStore(),
  router: routerStore
};

ReactDOM.render(
  <Provider {...rootStore}>
    <Root>
      <Router history={history}>
        <Switch>
          <Route
            exact={true}
            path="/"
            component={View}
          />
          <Route 
            exact={true}
            path="/view2"
            component={View2}
          />
        </Switch>
      </Router>
    </Root>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
