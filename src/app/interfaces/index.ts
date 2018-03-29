import { IBase } from './index';
import { RouteComponentProps } from 'react-router';
import { AuthStore, HostStore, OverViewStore } from '../stores';

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
  host: HostStore,
  overview: OverViewStore
}

export interface IOverview {
  pv: string;
  uv: string;
  vv: string;
  avgVisitTime: string;
  avgPageCount: string;
  date: string;
}

export interface IOverviewQuery {
  from: string,
  to: string,
  step?: string,
  id: string
}