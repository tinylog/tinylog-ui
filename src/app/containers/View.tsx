import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { TimerStore } from '../stores';
import { RouterStore } from 'mobx-react-router';
import { RouteComponentProps } from 'react-router';
import { Button } from 'antd';

export interface ViewProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
}

@inject('timer', 'router')
@observer
class View extends React.Component<ViewProps, {}> {
  render () {
    const { push } = this.props.router;
    return (
      <div>
        <h1>Test1</h1>
        <Button onClick={this.onReset}>
          Seconds passed: {this.props.timer.timer}
        </Button>
        <Button onClick={this.addTimer}>Add</Button>
        <Button onClick={this.subTimer}>Sub</Button>
        <Button onClick={() => push('/view2')}>Change url</Button>
      </div>
    );
  }
  onReset = () => {
    this.props.timer.resetTimer();
  }
  addTimer = () => {
    this.props.timer.addTimer();
  }
  subTimer = () => {
    this.props.timer.subTimer();
  }
  
}

export default View;