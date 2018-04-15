import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import { IOverViewRealTimePage } from '../../../interfaces';
import DoughnutPie from '../../../components/Echart/DoughnutPie';
import { Table } from 'antd';
import './index.css';
import ChinaMap from '../../../components/Echart/ChinaMap';

interface OverViewRealTimeProps extends IOverViewRealTimePage {
}

interface OverViewRealTimeState {
  timer: any;
}

@inject('host', 'router', 'realtime')
@autobind
@observer
class OverViewRealTime extends React.Component<OverViewRealTimeProps, OverViewRealTimeState> {
  constructor (props: OverViewRealTimeProps, state: OverViewRealTimeState) {
    super(props, state);
    this.state = {
      timer: 0
    }
  }
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.realtime.getRealTime({
      id: this.props.host.id
    });
    const timer = setInterval(() => {
      this.props.realtime.getRealTime({
        id: this.props.host.id
      })
    }, 10000)
    this.setState({
      timer
    })
  }
  componentWillUnmount () {
    clearInterval(this.state.timer)
  }
  render () {
    const title = '数据概览';
    const messages = [
      { name: '当前访问量:', value: this.props.realtime.realtime.count }
    ]
    const columns = [{
      title: '来源地址',
      dataIndex: 'referrer',
      key: 'referrer',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '来源次数',
      dataIndex: 'count',
      key: 'count',
      render: text => <a href="#">{text}</a>,
    }];
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <Title title="实时详细数据"/>
        <div className="realtime-msg-data-cont">
          <DoughnutPie
            id="browserNameRealTime"
            legend={this.props.realtime.realtime.browserName.slice().map(item => item.browserName)}
            title="浏览器类型占比实时数据" 
            width={600}
            height={300}
            vaules={this.props.realtime.realtime.browserName.slice().map(item => ({ name: item.browserName, value: item.count }))}
          />
          <DoughnutPie
            id="deviceTypeRealTime"
            legend={this.props.realtime.realtime.deviceType.slice().map(item => item.deviceType)}
            title="设备类型占比实时数据" 
            width={600}
            height={300}
            vaules={this.props.realtime.realtime.deviceType.slice().map(item => ({ name: item.deviceType, value: item.count }))}
          />
        </div>
        <div className="realtime-msg-data-cont">
          <ChinaMap vaules={this.props.realtime.realtime.country.slice().map(item => ({ value: item.count, name: item.country}))}/>
        </div>
        <Table
          columns={columns}
          dataSource={this.props.realtime.realtime.referrer.slice().map((item, index) => {
            item.key = index;
            return item;
          })}
        />
      </div>
    )
  }
}

export default OverViewRealTime;