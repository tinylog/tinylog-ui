import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import PvUvLine from '../../../components/Echart/PvUvLine';
import { IPvUvLine } from '../../../components/Echart/PvUvLine';
import { ISommthedLine } from '../../../components/Echart/SmoothedLine';
import SmoothedLine from '../../../components/Echart/SmoothedLine';
import { IBaseMsgPage } from '../../../interfaces'
import Title from '../../../components/Title';
import './index.css';

interface BaseMsgProps extends IBaseMsgPage {
}

interface BaseMsgState {
  pvUvOpt: IPvUvLine;
  avgVisitTimeOpt: ISommthedLine;
  avgPageCountOpt: ISommthedLine;
}

@inject('host', 'router', 'overview')
@autobind
@observer
class BaseMsg extends React.Component<BaseMsgProps, BaseMsgState> {
  constructor (props: BaseMsgProps, state: BaseMsgState) {
    super(props, state);
    this.state = {
      pvUvOpt: {
        width: 1500,
        height: 350,
        id: 'pvUvLine',
        title: 'pv uv 访问数据量'
      },
      avgVisitTimeOpt: {
        width: 600,
        height: 300,
        id: 'avgVisitTime',
        title: '平均访问时长'
      },
      avgPageCountOpt: {
        width: 600,
        height: 300,
        id: 'avgPageCount',
        title: '平均访问次数'
      }
    };
  }
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.overview.getOverview({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  render () {
    const title = '信息导航';
    const messages = [
      { name: '名称:', value: 'TinyLog' },
      { name: '域名:', value: this.props.host.website },
      { name: 'ip地址:', value: '1000' },
      { name: '健康指标:', value: '正常' },
      { name: '用户数量:', value: '1000个' }
    ];
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <div>
          <Title title="网站平访问数据"/>
          <div className="base-msg-data-cont">
            <SmoothedLine
              {...this.state.avgVisitTimeOpt} 
              xValues={this.props.overview.overviews.slice().map(item => item.date)}
              yValues={this.props.overview.overviews.slice().map(item => item.avgVisitTime)}
            />
            <SmoothedLine
              {...this.state.avgPageCountOpt} 
              xValues={this.props.overview.overviews.slice().map(item => item.date)}
              yValues={this.props.overview.overviews.slice().map(item => item.avgPageCount)}
            />
          </div>
          <Title title="网站 PV UV 数据"/>
          <div className="base-msg-data-cont">
            <PvUvLine
              {...this.state.pvUvOpt} 
              xValues={this.props.overview.overviews.slice().map(item => item.date)}
              pvValues={this.props.overview.overviews.slice().map(item => item.pv)}
              uvValues={this.props.overview.overviews.slice().map(item => item.uv)}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default BaseMsg;