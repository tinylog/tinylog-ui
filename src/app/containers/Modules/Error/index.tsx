import * as React from 'react';
import './index.css';
import Detail from '../../../components/Detail';

class Error extends React.Component<{}, {}> {
  render () {
    const title = '错误信息'
    const messages = [
      { name: '错误次数', value: 0 }
    ]
    return (
      <div>
        <Detail title={title} messages={messages}/>
      </div>
    )
  }
}

export default Error;