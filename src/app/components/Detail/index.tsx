import * as React from 'react';
import Title from '../Title';
import './style.css';

class Detail extends React.Component<{}, {}> {
  render () {
    return (
      <div className={'tl-detail-container'}>
        <Title title={'信息导航'}/>
        <div className={'tl-detail-form'}>
          <p><span>名称:</span>TinyLog</p>
          <p><span>域名:</span>www.tinylog.org</p>
          <p><span>ip地址:</span>1000</p>
          <p><span>健康指标:</span>正常</p>
          <p><span>当前用户:</span>1000</p>
        </div>
      </div>
    );
  }
}

export default Detail;