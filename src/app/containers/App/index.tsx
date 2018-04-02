import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route } from 'react-router';
import { Layout } from 'antd';
import { autobind } from 'core-decorators';
import Sider from '../../layout/Sider';
import { IAuth } from '../../interfaces';

// components
import ContentHeader from '../../components/ContentHeader';
import Footer from '../../components/Footer';

// modules
import BaseMsg from '../../containers/Modules/BaseMsg';
import AssetsMsg from '../../containers/Modules/AssetsMsg';
import Referrer from '../../containers/Modules/Referrer';
import WebPerformance from '../../containers/Modules/WebPerformance';
import System from '../../containers/Modules/System';

const { Content } = Layout;

interface AppProps extends IAuth {
}

interface AppState {
  title: string;
}

@inject('router', 'auth')
@observer
@autobind
class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      title: '欢迎使用tinglog^-^'
    };
  }
  async componentWillMount () {
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
        <Layout style={{paddingBottom: 10}}>
          <Sider onMenuItemClick={this.handleMenuItemClick}/>
          <Layout>
            <Content>
              <ContentHeader title={this.state.title}/>
              <Content style={{ margin: 16, padding: 16,  minHeight: 750, background: '#fff' }}>
                <Route exact={true} path="/base/webMsg" component={BaseMsg}/>
                <Route exact={true} path="/common/referrer" component={Referrer}/>
                <Route exact={true} path="/common/system" component={System}/>
                <Route exact={true} path="/performance/webMsg" component={WebPerformance}/>
                <Route exact={true} path="/performance/assetsMsg" component={AssetsMsg}/>
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