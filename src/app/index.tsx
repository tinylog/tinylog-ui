import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { TimerStore, TokenStore, AuthStore, BaseMsgStore } from './stores';
import registerServiceWorker from './registerServiceWorker';
import { Root } from './containers/Root';
import './index.css';
import App from './containers/App';
import SignIn from './containers/Auth/signIn';
import SignUp from './containers/Auth/signUp';
import './macarons';

useStrict(true);

const browserHistory = createBrowserHistory();
const routerStore =  new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);
const rootStore = {
  token: new TokenStore(),
  timer: new TimerStore(),
  auth: new AuthStore(),
  baseMsg: new BaseMsgStore(),
  router: routerStore
};

ReactDOM.render(
  <Provider {...rootStore}>
    <Root>
      <Router history={history}>
        <Switch>
          <Route
            path="/signIn"
            component={SignIn}
          />
          <Route
            path="/signUp"
            component={SignUp}
          />
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
