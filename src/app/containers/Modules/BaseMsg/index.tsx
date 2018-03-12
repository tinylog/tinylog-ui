import * as React from 'react';
import Detail from '../../../components/Detail';
import SommthedLine from '../../../components/Echart/SmoothedLine';
import Title from '../../../components/Title';

interface BaseMsgState {
  sommthedLineOpt: {
    width: number,
    height: number
  };
}

class BaseMsg extends React.Component<{}, BaseMsgState> {
  constructor (props: {}, state: BaseMsgState) {
    super(props, state);
    this.state = {
      sommthedLineOpt: {
        width: 500,
        height: 300
      }
    };
  }
  render () {
    return (
      <div>
        <Detail/>
        <div>
          <Title title="网站基本数据走势"/>
          <SommthedLine {...this.state.sommthedLineOpt}/>
        </div>
      </div>
    );
  }
}

export default BaseMsg;