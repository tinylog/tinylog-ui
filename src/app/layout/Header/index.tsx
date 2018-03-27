import * as React from 'react';
import { Layout, Menu } from 'antd';
import { headerPath } from '../../config/path';
import { autobind } from 'core-decorators';
import { IAuth } from '../../interfaces/index';

import './style.css';

const { Header } = Layout;

interface HeaderLayoutProps extends IAuth {
}

@autobind
class HeaderLayout extends React.Component<HeaderLayoutProps, {}> {
  handleMenuItemClick ({ item, key, keyPath }: any) {
    if (headerPath[+key].path === '/signIn') {
      this.props.auth.clearStorage();
    }
    this.props.history.push(headerPath[+key].path);
  }
  render () {
    return (
      <Header className="header">
        <div className="logo">Tiny Log</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          onClick={this.handleMenuItemClick}
          style={{ lineHeight: '64px' }}
        >
        {
          headerPath.map((item, index) => {
            return (
              <Menu.Item key={index}>
                {item.title}
              </Menu.Item>
            );
          })
        }
        </Menu>
      </Header>
    );
  }
}

export default HeaderLayout;