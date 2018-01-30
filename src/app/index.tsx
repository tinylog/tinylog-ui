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
import './index.css';
import App from './containers/App';

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
            path="/"
            component={App}
          />
        </Switch>
      </Router>
    </Root>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
