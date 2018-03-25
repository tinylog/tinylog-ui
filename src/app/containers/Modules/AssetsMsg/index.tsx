import * as React from 'react';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import Bar from '../../../components/Echart/Bar';
import DoughnutPie from '../../../components/Echart/DoughnutPie';
import { Table, Icon, Divider } from 'antd';
import './index.css';

class AssetsMsg extends React.Component<{}, {}> {
  render() {
    const title = '资源信息';
    const messages = [
      { name: '资源数:', value: '5' },
      { name: '总时长:', value: '20s' },
      { name: '平均时长:', value: '2s' }
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
          <Bar width={500} height={300} />
          <DoughnutPie width={500} height={300} />
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default AssetsMsg;