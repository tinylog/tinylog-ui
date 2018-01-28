import { observable, action } from 'mobx';

class TimerStore {
  @observable timer;
  constructor () {
    this.timer = 0;
  }
  @action resetTimer () {
    this.timer = 0;
  }
  
  @action addTimer () {
    this.timer++;
  }

  @action subTimer () {
    this.timer--;
  }
}

export default TimerStore;