import { observable, action } from 'mobx';

class TokenStore {
  @observable token;
  constructor () {
    this.token = '';
  }
  @action resetToken () {
    this.token = '';
  }
  @action setToken (token: string) {
    this.token = token;
  }
}

export default TokenStore;