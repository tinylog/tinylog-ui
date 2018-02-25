import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps, Route } from 'react-router';
import { RouterStore } from 'mobx-react-router';
import { Layout } from 'antd';
import { TimerStore } from '../../stores';
import View from '../View';
import View2 from '../View2';
import Header from '../../layout/Header';
import Sider from '../../layout/Sider';

const { Content } = Layout;

export interface AppProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
}

@inject('timer', 'router')
@observer
class App extends React.Component<AppProps, {}> {
  render () {
    console.log(this.props.router);
    return (
      <Layout style={{ height: '100%' }}>
        <Header/>
        <Layout>
          <Sider/>
          <Layout>
            <Content>
              <Route exact={true} path="/view" component={View}/>
              <Route exact={true} path="/view2" component={View2}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;