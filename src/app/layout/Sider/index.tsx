import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { siderPath } from '../../config/path';
import { Link } from 'react-router-dom';
import { autobind } from 'core-decorators';

const { SubMenu } = Menu;
const { Sider } = Layout;

interface TitleState {
  item: object;
  key: string;
}

interface ISiderLayout {
  onMenuItemClick: any;
}

@autobind
class SiderLayout extends React.Component<ISiderLayout, {}> {
  handleMenuItemClick (state: TitleState) {
    let arr = state.key.split('-').map((item) => {
      return parseInt(item, 10);
    });
    this.props.onMenuItemClick(siderPath[arr[0]].menuItems[arr[1]].title);
  }
  render () {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[]}
          defaultOpenKeys={[]}
          style={{ height: '100%', borderRight: 0 }}
          onClick={this.handleMenuItemClick}
        >
        {
          siderPath.map((subMenu, index) => {
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
          })
        }
        </Menu>
      </Sider>
    );
  }
}

export default SiderLayout;