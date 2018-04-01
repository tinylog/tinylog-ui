import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import Bar from '../../../components/Echart/Bar';
import DoughnutPie from '../../../components/Echart/DoughnutPie';
import { IAssetsMsgPage } from '../../../interfaces';
import { Table, Icon, Divider } from 'antd';
import './index.css';

interface AssetsMsgProps extends IAssetsMsgPage {
}

@inject('router', 'assets', 'host')
@autobind
@observer
class AssetsMsg extends React.Component<AssetsMsgProps, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.assets.getAssets({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  render() {
    const title = '资源信息';
    const messages = [
      { name: '资源数:', value: this.props.assets.assets.slice().length + '个' },
      { name: '总消耗时长:', value: this.props.assets.totalDuration + 'ms' },
      { name: '平均消耗时长:', value: this.props.assets.avgDuration + 'ms' },
      { name: '总DNS查询时长:', value: this.props.assets.totalLookupDomain + 'ms'},
      { name: '平均DNS查询时长:', value: this.props.assets.avgLookupDomain + 'ms' },
      { name: '总重定向时长:', value: this.props.assets.totalRedirect + 'ms' },
      { name: '平均重定向时长:', value: this.props.assets.avgRedirect + 'ms' },
      { name: '总TCP请求时间:', value: this.props.assets.totalRequest + 'ms' },
      { name: '平均TCP请求时间:', value: this.props.assets.avgRequest + 'ms' }
    ];
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="#">Delete</a>
          <Divider type="vertical" />
          <a href="#" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <div>
        <Detail title={title} messages={messages} />
        <Title title="网站资源详情" />
        <div className="assets-msg-data-cont">
          <Bar
            title="资源总时长"
            id="assetsBar"
            width={500}
            height={300}
            xValues={this.props.assets.assets.map(item => item.name)}
            yValues={this.props.assets.assets.map(item => item.avgDuration)}
          />
          <DoughnutPie
            id="assetsDoughnutPie"
            legend={this.props.assets.assets.slice().map(item => item.entryType)}
            title="资源类型总时长占比" 
            width={500}
            height={300}
            vaules={this.props.assets.typeDuration.slice().map(item => ({ name: item.entryType, value: item.avgDuration }))}
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default AssetsMsg;