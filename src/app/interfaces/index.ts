import { IBase, IAssets } from './index';
import { RouteComponentProps } from 'react-router';
import { 
  AuthStore, 
  HostStore, 
  OverViewStore, 
  AssetsStore,
  CommonDataStore
} from '../stores';

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

/**
 * 模块页面props接口 -----------------------------------------------------
 */
// 网站基本信息页面
export interface IBaseMsgPage extends IAuth {
  host: HostStore;
  overview: OverViewStore;
}

// 资源性能页面
export interface IAssetsMsgPage extends IAuth {
  host: HostStore;
  assets: AssetsStore;
}

// 来源信息页面
export interface ICommonDataPage extends IAuth {
  host: HostStore,
  commmon: CommonDataStore
}

/**
 * api接口数据格式 -----------------------------------------------------
 */
// 基本时间查询条件参数接口
export interface IBaseQuery {
  from: string;
  to: string;
  step?: string;
  id: string;
}

// 网站基本数据信息
export interface IOverviewQuery extends IBaseQuery {
}
export interface IOverview {
  pv: string;
  uv: string;
  vv: string;
  avgVisitTime: string;
  avgPageCount: string;
  date: string;
}

// 网站资源信息
export interface IAssetsQuery extends IBaseQuery {
}
export interface IAssets {
  key?: number|string,
  avgDuration: number;
  avgRedirect: number;
  avgRequest: number;
  avgLookupDomain: number;
  name: string;
  entryType: string;
}

// 网站性能信息
export interface ICommonDataQuery extends IBaseQuery {
  type?: string;
}

export interface ICommonData {
  // referrer?: string;
  // country?: string;
  // lang?: string;
  // region?: string;
  // city?: string;
  // osName?: string;
  // browserName?: string;
  // engineName?: string;
  // hostname?: string;
  // org?: string;
  // count?: string;
  value: string|number;
  count: number
}