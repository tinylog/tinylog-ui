import { ISignIn, ISignUp } from './../interfaces/index';
import rest from './axios';

const signIn = (data: ISignIn) => {
  return rest.request({
    method: 'post',
    url: '/user/login',
    data
  });
};

const signUp = (data: ISignUp) => {
  return rest.request({
    method: 'post',
    url: '/user/register',
    data
  });
};

export default {
  signIn,
  signUp
}