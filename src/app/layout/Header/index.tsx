import * as React from 'react';
import { Layout, Menu } from 'antd';
import { headerPath } from '../../config/path';
import { Link } from 'react-router-dom';
import './style.css';

const { Header } = Layout;

const menuItems = () => {
  return headerPath.map((item, index) => {
    return (
      <Menu.Item key={index}>
        <Link to={item.path}>{item.title}</Link>
      </Menu.Item>
    );
  });
};

class HeaderLayout extends React.Component<{}, {}> {
  render () {
    return (
      <Header className="header">
        <div className="logo">Tiny Log</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        {menuItems()}
        </Menu>
      </Header>
    );
  }
}

export default HeaderLayout;