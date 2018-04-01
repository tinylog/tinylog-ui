import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import { ICommonDataPage } from '../../../interfaces';
import Bar from '../../../components/Echart/Bar';
import './index.css';

interface ReferrerProps extends ICommonDataPage {
}

@inject('host', 'router', 'commmon')
@autobind
@observer
class Referrer extends React.Component<ReferrerProps, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.commmon.getReffer({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    })
    console.log(this.props.commmon.referrer.slice())
  }
  render () {
    const title = '网站来源地址';
    const messages = [
      { name: '来源地址总数:', value: this.props.commmon.referrer.slice().length + '个' },
      { name: '来源次数最多地址:', value: 'www.baidu.com' }
    ]
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <Title title="来源地址数据分布"/>
        <div className="referrer-cont">
          <Bar
            title="来源地址统计"
            id="referrerBar"
            width={1500}
            height={350}
            xValues={this.props.commmon.referrer.map(item => item.value)}
            yValues={this.props.commmon.referrer.map(item => item.count)}
          />
        </div>
      </div>
    )
  }
}

export default Referrer;
