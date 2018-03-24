import { ISignIn, ISignUp } from './../interfaces/index';
import { observable, action } from 'mobx';
import api from '../api/auth'; 

class AuthStore {
  @observable token;
  constructor () {
    this.token = '';
  }
  @action async signIn (data: ISignIn) {
    const res = await api.signIn(data);
    console.log(res);
  }
  
  @action async signUp (data: ISignUp) {
    const res = await api.signUp(data);
    console.log(res);
  }

  @action signOut () {
    console.log('test');
  }
}

export default AuthStore;