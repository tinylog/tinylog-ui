import * as React from 'react';
import Header from '../../layout/Header';
import { IAuth } from '../../interfaces';
import { Route, Switch } from 'react-router';
import { inject, observer } from 'mobx-react';
import App from '../App';
import Website from '../Website';

interface Container extends IAuth {
}

@inject('router', 'auth')
@observer
class Container extends React.Component<Container, {}> {
  render () {
    return (
      <div>
        <Header {...this.props} />
        <Switch>
          <Route path="/website" component={Website}/>
          <Route  path="/" component={App}/>
        </Switch>
      </div>
    )
  }
}

export default Container;