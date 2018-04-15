import * as React from 'react';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import './index.css';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { Table } from 'antd';
import { IPageDataPage } from '../../../interfaces';

@inject('host', 'router', 'page')
@autobind
@observer
class WebPerformance extends React.Component<IPageDataPage, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.page.getPages({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    })
    console.log(this.props.page.pages.slice())
  }
  render () {
    const title = '平均性能';
    const messages = [
      { name: '页面加载:', value: '1s' },
      { name: 'Dom解析:', value: '2s' },
      { name: '重定向:', value: '2s' },
      { name: 'DNS查询:', value: '1s' },
      { name: '获取资源:', value: '0.2s' },
      { name: '内容加载:', value: '2s' },
      { name: '内容加载:', value: '4s' },
      { name: 'TCP连接:', value: '2s' },
      { name: '浏览器onload:', value: '1s' }
    ]
    const columns = [{
      title: '页面地址',
      dataIndex: 'url',
      key: 'url',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Dom解析时间',
      dataIndex: 'avgDomReady',
      key: 'avgDomReady',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: 'LoadEvent时长',
      dataIndex: 'avgLoadEvent',
      key: 'avgLoadEvent',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: '页面加载时间',
      dataIndex: 'avgLoadPage',
      key: 'avgLoadPage',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: '页面重定向时间',
      dataIndex: 'avgRedirect',
      key: 'avgRedirect',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: '页面请求时间',
      dataIndex: 'avgRequest',
      key: 'avgRequest',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: '响应时间',
      dataIndex: 'avgTtfb',
      key: 'avgTtfb',
      render: text => <span>{text + 'ms'}</span>
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#" className="ant-dropdown-link">详情</a>
        </span>
      ),
    }];
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <div>
          <Title title="数据分析展示"/>
          <div className="web-performance-data-cont">
            {/* <DoughnutPie title="时长占比" width={500} height={300} /> */}
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={this.props.page.pages.slice().map((item, index) => {
            item.key = index;
            return item;
          })}
        />
      </div>
    )
  }
}

export default WebPerformance;