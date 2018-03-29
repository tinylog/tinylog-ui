import { ISignIn, ISignUp } from './../interfaces/index';
import { observable, action } from 'mobx';
import api from '../api/auth'; 
import { IUser } from '../models';

class AuthStore {
  @observable token;
  @observable id;
  @observable email;
  constructor () {
    this.id = '';
    this.token = '';
    this.email = '';
  }
  setLocalStorage ({ id, token, email }: IUser) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }
  clearStorage () {
    localStorage.clear();
  }
  @action async signIn (data: ISignIn) {
    try {
      const { data: res } = await api.signIn(data);
      this.id = res.data.id;
      this.token = res.data.token;
      this.email = res.data.email;
      this.setLocalStorage({
        id: this.id,
        token: this.token,
        email: this.email
      });
      return res;
    } catch (error) {
      return error;
    }
  }
  
  @action async signUp (data: ISignUp) {
    try {
      const { data: res } = await api.signUp(data);
      this.id = res.data.id;
      this.token = res.data.token;
      this.email = res.data.email;
      this.setLocalStorage({
        id: this.id,
        token: this.token,
        email: this.email
      });
      return res;
    } catch (error) {
      return error;
    }
  }

  @action signOut () {
    this.id = '';
    this.token = '';
    this.email = '';
    this.clearStorage()
  }
}

export default AuthStore;