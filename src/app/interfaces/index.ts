import { IBase } from './index';
import { RouteComponentProps } from 'react-router';
import { AuthStore, BaseMsgStore } from '../stores';

export interface IBase extends RouteComponentProps<{}> {
}

export interface IAuth extends IBase {
  auth: AuthStore;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
}

export interface IBaseMsg extends IAuth {
  baseMsg: BaseMsgStore
}