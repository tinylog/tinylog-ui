import * as React from 'react';
import echarts from 'echarts';

interface ISommthedLine {
  width: number;
  height: number;
  id: string;
  title: string
}

class SommthedLine extends React.Component<ISommthedLine, {}> {
  componentDidMount () {
    let chart = echarts.init(document.getElementById(this.props.id), 'macarons');
    chart.setOption({
      title: {
        left: 'center',
        top: 'top',
        text: this.props.title,
        textStyle: {
          fontSize: 14
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 312],
          type: 'line',
          smooth: true
      }]
    });
  }
  render () {
    return (
      <div id={this.props.id} style={{display: 'inline-block', width: this.props.width, height: this.props.height}}/>
    );
  }
}

export default SommthedLine;