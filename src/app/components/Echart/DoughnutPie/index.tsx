import * as React from 'react';
import echarts from 'echarts';

interface IDoughtPieVal {
  name: string;
  value: number;
}

interface IDoughnutPie {
  width: number;
  height: number;
  id: string;
  title: string;
  legend: (string)[];
  vaules: (IDoughtPieVal)[];
}

class DoughnutPie extends React.Component<IDoughnutPie, IDoughnutPie> {
  constructor (props: IDoughnutPie, state: IDoughnutPie) {
    super(props, state);
    this.state = Object.assign({}, this.props)
  }
  componentWillReceiveProps (nextProps: IDoughnutPie) {
    this.setState(nextProps, () => {
      this.initChart()
    })
  }
  componentDidMount() {
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
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: this.state.legend
      },
      series: [
        {
          name: this.state.title,
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.state.vaules
        }
      ]
    });
  }
  render() {
    return (
      <div id={this.state.id} style={{ display: 'inline-block', width: this.state.width, height: this.state.height }} />
    );
  }
}

export default DoughnutPie;