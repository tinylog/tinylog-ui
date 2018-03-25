import * as React from 'react';
import echarts from 'echarts';

interface IDoughnutPie {
  width: number;
  height: number;
}

class DoughnutPie extends React.Component<IDoughnutPie, {}> {
  componentDidMount() {
    let chart = echarts.init(document.getElementById('doughnutPie'), 'macarons');
    chart.setOption({
      title: {
        left: 'center',
        top: 'top',
        text: '资源类型占比',
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
        data: [ '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎' ]
      },
      series: [
        {
          name: '访问来源',
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
          data: [
            {value: 335, name: '直接访问'},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ]
        }
      ]
    });
  }
  render() {
    return (
      <div id="doughnutPie" style={{ display: 'inline-block', width: this.props.width, height: this.props.height }} />
    );
  }
}

export default DoughnutPie;