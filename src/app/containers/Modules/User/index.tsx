import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import Detail from '../../../components/Detail';
import Title from '../../../components/Title';
import ChinaMap from '../../../components/Echart/ChinaMap';
import { ICommonDataPage } from '../../../interfaces';

import './index.css';

interface UserProps extends ICommonDataPage {
}

@inject('host', 'router', 'commmon')
@autobind
@observer
class User extends React.Component<UserProps, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.commmon.getCountry({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    });
  }
  render () {
    const title = '用户数据展示';
    const messages = [
      { name: '用户量:', value: 200 },
      { name: '', value: '' }
    ]
    return (
      <div>
        <Detail title={title} messages={messages}/>
        <Title title="用户地区分布情况"/>
        <div className="user-cont">
          <ChinaMap vaules={this.props.commmon.country.slice().map(item => ({ value: item.count, name: item.value}))}/>
        </div>
      </div>
    )
  }
}

export default User;
