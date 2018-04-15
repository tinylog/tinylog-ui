import { IBase, IAssets, IBaseMsgPage, IRealTime } from './index';
import { RouteComponentProps } from 'react-router';
import {
  RouterStore,
  AuthStore, 
  HostStore, 
  OverViewStore, 
  AssetsStore,
  CommonDataStore,
  PageStore,
  RealTimeStore
} from '../stores';

export interface IBase extends RouteComponentProps<{}> {
  router: RouterStore;
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

// 页面性能页面
export interface IPageDataPage extends IAuth {
  host: HostStore,
  page: PageStore
}

// 实时数据页面
export interface IOverViewRealTimePage extends IAuth {
  host: HostStore,
  realtime: RealTimeStore
}

/**
 * api接口数据格式 -----------------------------------------------------
 */
// 基本时间查询条件参数接口
export interface IBaseQuery {
  from?: string;
  to?: string;
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

export interface IHost {
  key?: number;
  id: string;
  timezone: string;
  userId: string;
  domain: string;
}

export interface IHostBody {
  id?: string;
  domain?: string;
  timezone?: string;
}

// 网站页面性能信息

export interface IPageQuery extends IBaseQuery {
}

export interface IPage {
  key?: number;
  avgLoadPage: number;
  avgDomReady: number;
  avgRedirect: number;
  avgLookupDomain: number;
  avgTtfb: number;
  avgRequest: number;
  avgTcp: number;
  avgLoadEvent: number;
  url: string;
}

// 网站实时数据

export interface IRealTimeQuery extends IBaseQuery {
}

export interface IReferrerRealTime {
  referrer: string;
  count: number;
  key?: number;
} 

export interface IBrowserRealTime {
  browserName: string;
  count: number;
}

export interface IDeviceRealTime {
  deviceType: string;
  count: number;
}

export interface ICountryRealTime {
  country: string;
  count: number;
}

export interface IRealTime {
  count: number;
  referrer: (IReferrerRealTime)[];
  browserName: (IBrowserRealTime)[];
  deviceType: (IDeviceRealTime)[];
  country: (ICountryRealTime)[];
}