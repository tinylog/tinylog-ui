import * as React from 'react';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import DoughnutPie from '../../../components/Echart/DoughnutPie';
import './index.css';

class WebPerformance extends React.Component<{}, {}> {
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
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <div>
          <Title title="数据分析展示"/>
          <div className="web-performance-data-cont">
            <DoughnutPie title="时长占比" width={500} height={300} />
          </div>
        </div>
      </div>
    )
  }
}

export default WebPerformance;