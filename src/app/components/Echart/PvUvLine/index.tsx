import * as React from 'react';
import echarts from 'echarts';

export interface IPvUvLine {
  width: number;
  height: number;
  id: string;
  title: string;
  xValues?: (string|number)[];
  pvValues?: (string|number)[];
  uvValues?: (string|number)[];
}

class PvUvLine extends React.Component<IPvUvLine, IPvUvLine> {
  constructor (props: IPvUvLine, state: IPvUvLine) {
    super(props, state)
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps (nextProps: IPvUvLine) {
    this.setState(nextProps, () => {
      this.initChart()
    })
  }
  componentDidMount () {
    this.initChart()
  }
  initChart () {
    let chart = echarts.init(document.getElementById(this.state.id), 'macarons');
    chart.setOption({
      title: {
        left: 'center',
        top: 'bottom',
        text: this.state.title,
        textStyle: {
          fontSize: 14
        }
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
      },
      legend: {
        data: ['pv 访问数据', 'uv 访问数据']
      },
      xAxis: {
        type: 'category',
        data: this.state.xValues
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'pv 访问数据',
        data: this.state.pvValues,
        type: 'line',
        smooth: true
      }, {
        name: 'uv 访问数据',
        data: this.state.uvValues,
        type: 'line',
        smooth: true
      }]
    });
  }
  render () {
    return (
      <div id={this.state.id} style={{display: 'inline-block', width: this.state.width, height: this.state.height}}/>
    );
  }
}

export default PvUvLine;