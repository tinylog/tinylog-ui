import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps, Route } from 'react-router';
import { RouterStore } from 'mobx-react-router';
import { Layout } from 'antd';
import { TimerStore, AuthStore } from '../../stores';
import { autobind } from 'core-decorators';
import Header from '../../layout/Header';
import Sider from '../../layout/Sider';

// components
import ContentHeader from '../../components/ContentHeader';
import Footer from '../../components/Footer';

// modules
import View from '../View';
import View2 from '../View2';
import BaseMsg from '../../containers/Modules/BaseMsg';
import AssetsMsg from '../../containers/Modules/AssetsMsg';
import WebPerformance from '../../containers/Modules/WebPerformance';

const { Content } = Layout;

interface AppProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
  auth: AuthStore;
}

interface AppState {
  title: string;
}

@inject('timer', 'router', 'auth')
@observer
@autobind
class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      title: '欢迎使用tinglog^-^'
    };
  }
  componentWillMount () {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/signIn');
      return;
    }
  }
  handleMenuItemClick (title: string) {
    this.setState({
      title
    });
  }
  render () {
    return (
      <Layout style={{ height: '100%', minWidth: 1280 }}>
        <Header {...this.props} />
        <Layout style={{paddingBottom: 10}}>
          <Sider onMenuItemClick={this.handleMenuItemClick}/>
          <Layout>
            <Content>
              <ContentHeader title={this.state.title}/>
              <Content style={{ margin: 16, padding: 16,  minHeight: 750, background: '#fff' }}>
                <Route exact={true} path="/base/webMsg" component={BaseMsg}/>
                <Route exact={true} path="/performance/webMsg" component={WebPerformance}/>
                <Route exact={true} path="/performance/assetsMsg" component={AssetsMsg}/>
                <Route exact={true} path="/view" component={View}/>
                <Route exact={true} path="/view2" component={View2}/>
              </Content>
              <Footer/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;