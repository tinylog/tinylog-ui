import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { siderPath } from '../../config/path';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const siderItems = () => {
  return siderPath.map((subMenu, index) => {
    return (
      <SubMenu key={index.toString()} title={<span><Icon type={subMenu.icon} />{subMenu.title}</span>}>
        {
          subMenu.menuItems.map((menuItem, _index) => {
            return (
              <Menu.Item key={`${index.toString()}-${_index.toString()}`}>
                <Link to={menuItem.path}>{menuItem.title}</Link>
              </Menu.Item>
            );
          })
        }
      </SubMenu>
    );
  });
};

class SiderLayout extends React.Component<{}, {}> {
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[]}
          defaultOpenKeys={[]}
          style={{ height: '100%', borderRight: 0 }}
        >
        {siderItems()}
        </Menu>
      </Sider>
    );
  }
}

export default SiderLayout;