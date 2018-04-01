import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { autobind } from 'core-decorators';
import { ICommonDataPage } from '../../../interfaces';

interface ReferrerProps extends ICommonDataPage {
}

@inject('host', 'router', 'commmon')
@autobind
@observer
class Referrer extends React.Component<ReferrerProps, {}> {
  async componentWillMount () {
    await this.props.host.getHost();
    await this.props.commmon.getReffer({
      id: this.props.host.id,
      to: new Date().toISOString(),
      from: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    })
  }
  render () {
    return (
      <div>TEST</div>
    )
  }
}

export default Referrer;
