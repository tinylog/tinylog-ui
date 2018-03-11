import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { TimerStore } from '../stores';
import { RouterStore } from 'mobx-react-router';
import { RouteComponentProps } from 'react-router';
import { Button } from 'antd';
import echarts from 'echarts';

export interface ViewProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
}

@inject('timer', 'router')
@observer
class View extends React.Component<ViewProps, {}> {
  componentDidMount () {
    let chart = echarts.init(document.getElementById('main'));
    chart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
  render () {
    const { push } = this.props.router;
    return (
      <div>
        <div id="main" style={{ width: 400, height: 400 }}/>
        <h1>Test1</h1>
        <Button onClick={this.onReset}>
          Seconds passed: {this.props.timer.timer}
        </Button>
        <Button onClick={this.addTimer}>Add</Button>
        <Button onClick={this.subTimer}>Sub</Button>
        <Button onClick={() => push('/view2')}>Change url</Button>
      </div>
    );
  }
  onReset = () => {
    this.props.timer.resetTimer();
  }
  addTimer = () => {
    this.props.timer.addTimer();
  }
  subTimer = () => {
    this.props.timer.subTimer();
  }
  
}

export default View;