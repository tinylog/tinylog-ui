import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { TimerStore } from './stores';
import { RouterStore } from 'mobx-react-router';
import { RouteComponentProps } from 'react-router';

export interface ViewProps extends RouteComponentProps<{}> {
  timer: TimerStore;
  router: RouterStore;
}

@inject('timer', 'router')
@observer
class View extends React.Component<ViewProps, {}> {
  render () {
    const { goBack } = this.props.router;
    return (
      <div>
        <h1>Test2</h1>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.timer.timer}
        </button>
        <button onClick={this.addTimer}>Add</button>
        <button onClick={this.subTimer}>Sub</button>
        <button onClick={() => goBack()}>Go Back</button>
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