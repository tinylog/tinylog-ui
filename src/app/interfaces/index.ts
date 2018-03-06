import { RouteComponentProps } from 'react-router';
import { TokenStore } from '../stores';

export interface IBase extends RouteComponentProps<{}> {
}

export interface IAuth extends IBase {
  token: TokenStore;
}