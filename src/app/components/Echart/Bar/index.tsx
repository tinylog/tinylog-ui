import * as React from 'react';
import echarts from 'echarts';

interface IBar {
  width: number;
  height: number;
  title: string;
}

class Bar extends React.Component<IBar, {}> {
  componentDidMount() {
    let chart = echarts.init(document.getElementById('bar'), 'macarons');
    chart.setOption({
      title: {
        left: 'center',
        top: 'top',
        text: this.props.title,
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    });
  }
  render() {
    return (
      <div id="bar" style={{ display: 'inline-block', width: this.props.width, height: this.props.height }} />
    );
  }
}

export default Bar;