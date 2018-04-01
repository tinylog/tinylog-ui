import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import { ICommonDataPage } from '../../../interfaces';
import Bar from '../../../components/Echart/Bar';
import DoughnutPie from '../../../components/Echart/DoughnutPie';
import './index.css';

interface SystemProps extends ICommonDataPage {
}

@inject('host', 'router', 'commmon')
@autobind
@observer
class System extends React.Component<SystemProps, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.commmon.getOs({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    })
    await this.props.commmon.getBrowser({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    })
    console.log(this.props.commmon.osName.slice())
  }
  render () {
    const title = '系统环境数据';
    const messages = [
      { name: '系统类型数量:', value: this.props.commmon.osName.slice().length + '种' },
      { name: '访问最多的系统:', value: 'windows' },
      { name: '浏览器数量:', value: this.props.commmon.browserName.slice().length + '种' },
      { name: '访问最多的浏览器:', value: 'Chrome' }
    ]
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <Title title="操作系统使用情况"/>
        <div className="system-cont">
          <Bar
            title="操作系统类型"
            id="systemBar"
            width={600}
            height={300}
            xValues={this.props.commmon.osName.map(item => item.value)}
            yValues={this.props.commmon.osName.map(item => item.count)}
          />
          <DoughnutPie
            title="操作系统类型占比"
            id="systemDoughnutPie"
            width={600}
            height={300}
            legend={this.props.commmon.osName.slice().map(item => item.value)}
            vaules={this.props.commmon.osName.slice().map(item => ({ name: item.value, value: item.count }))}
          />
        </div>
        <Title title="浏览器使用情况"/>
        <div className="system-cont">
          <Bar
            title="浏览器类型"
            id="browserBar"
            width={600}
            height={300}
            xValues={this.props.commmon.browserName.map(item => item.value)}
            yValues={this.props.commmon.browserName.map(item => item.count)}
          />
          <DoughnutPie
            title="浏览器类型占比"
            id="browserDoughnutPie"
            width={600}
            height={300}
            legend={this.props.commmon.browserName.slice().map(item => item.value)}
            vaules={this.props.commmon.browserName.slice().map(item => ({ name: item.value, value: item.count }))}
          />
        </div>
      </div>
    )
  }
}

export default System;
