import * as React from 'react';
import { Layout, Menu } from 'antd';
import { headerPath } from '../../config/path';

const { Header } = Layout;

const menuItems = () => {
  return headerPath.map((item, index) => {
    return (
      <Menu.Item key={index}>{item.title}</Menu.Item>
    );
  });
};

class HeaderLayout extends React.Component<{}, {}> {
  handleMenuClick ({ item, key, keyPath }: any) {
    console.log(key);
  }
  render () {
    return (
      <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        onClick={this.handleMenuClick}
      >
      {menuItems()}
      </Menu>
    </Header>
    );
  }
}

export default HeaderLayout;