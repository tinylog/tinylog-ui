import * as React from 'react';
import echarts from 'echarts';

export interface ISommthedLine {
  width: number;
  height: number;
  id: string;
  title: string;
  xValues?: (string|number)[];
  yValues?: (string|number)[];
}

class SommthedLine extends React.Component<ISommthedLine, ISommthedLine> {
  constructor (props: ISommthedLine, state: ISommthedLine) {
    super(props, state)
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps (nextProps: ISommthedLine) {
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
        top: 'top',
        text: this.state.title,
        textStyle: {
          fontSize: 14
        }
      },
      xAxis: {
        type: 'category',
        data: this.state.xValues
      },
      yAxis: {
        type: 'value'
      },
      series: [{
          data: this.state.yValues,
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

export default SommthedLine;