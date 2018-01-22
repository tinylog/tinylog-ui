import AppState from './state';
import * as React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') 
@observer
class View extends React.Component<{ store: AppState }, {}> {
  store: AppState;
  constructor (props: { store: AppState}) {
    super(props);
    this.store = this.props.store;
  }
  render () {
    return (
      <div>
        <h1>Test1</h1>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.store.timer}
        </button>
        <button onClick={this.addTimer}>Add</button>
        <button onClick={this.subTimer}>Sub</button>
      </div>
    );
  }
  onReset = () => {
    this.props.store.resetTimer();
  }
  addTimer = () => {
    this.props.store.addTimer();
  }
  subTimer = () => {
    this.props.store.subTimer();
  }
  
}

export default View;