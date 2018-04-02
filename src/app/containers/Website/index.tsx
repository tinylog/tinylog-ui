import * as React from 'react';
import './index.css';
import { IBaseMsgPage } from '../../interfaces';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';

@inject('auth', 'host', 'router')
@autobind
@observer
class Website extends React.Component<IBaseMsgPage, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    console.log(this.props.host)
  }
  render () {
    return (
      <div>
        TEST
      </div>
    )
  }
}

export default Website;