import * as React from 'react';
import echarts from 'echarts';

interface IBar {
  width: number;
  height: number;
  title: string;
  id: string;
  xValues: (string|number)[];
  yValues: (string|number)[];
}

class Bar extends React.Component<IBar, IBar> {
  constructor (props: IBar, state: IBar) {
    super(props, state)
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps (nextProps: IBar) {
    this.setState(nextProps, () => {
      this.initChart();
    })
  }
  componentDidMount() {
    this.initChart();
  }
  initChart () {
    let chart = echarts.init(document.getElementById(this.state.id), 'macarons');
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
          data: this.state.xValues,
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
          name: this.state.title,
          type: 'bar',
          barWidth: '60%',
          data: this.state.yValues
        }
      ]
    });
  }
  render() {
    return (
      <div id={this.state.id} style={{ display: 'inline-block', width: this.props.width, height: this.props.height }} />
    );
  }
}

export default Bar;