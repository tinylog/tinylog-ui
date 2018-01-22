import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import AppState from './state';

import View from './View';
import View2 from './View2';

@observer
class App extends React.Component<{ store: AppState }, {}> {
  store: AppState;
  constructor(props: { store: AppState}) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    return (
      <Router>
        <Provider store={this.store}>
          <div>
            <Route
              exact={true}
              path="/"
              render={() => (
                <View
                  store={this.store}
                />
              )}
            />
            <Route 
              exact={true}
              path="/view2"
              render={() => (
                <View2
                  store={this.store}
                />
              )}
            />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
