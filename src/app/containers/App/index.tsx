import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps, Route } from 'react-router';
import { RouterStore } from 'mobx-react-router';
import { Layout } from 'antd';
import { TimerStore } from '../../stores';
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

const { Content } = Layout;

interface AppProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
}

interface AppState {
  title: string;
}

@inject('timer', 'router')
@observer
@autobind
class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps, state: AppState) {
    super(props, state);
    this.state = {
      title: '欢迎使用tinglog^-^'
    };
  }
  handleMenuItemClick (title: string) {
    this.setState({
      title
    });
  }
  render () {
    console.log(this.props.router);
    return (
      <Layout style={{ height: '100%' }}>
        <Header/>
        <Layout>
          <Sider onMenuItemClick={this.handleMenuItemClick}/>
          <Layout>
            <Content>
              <ContentHeader title={this.state.title}/>
              <Content style={{ margin: 16, padding: 16,  minHeight: 750, background: '#fff' }}>
                <Route exact={true} path="/baseMsg/webMsg" component={BaseMsg}/>
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