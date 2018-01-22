import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  constructor() {
    this.timer = 0;
  }
  resetTimer () {
    this.timer = 0;
  }
  addTimer () {
    this.timer++;
  }
  subTimer () {
    this.timer--;
  }
}

export default AppState;