export const headerPath = [
  {
    title: '我的站点',
    path: '/website',
  },
  {
    title: '控制面板',
    path: '/view2'
  },
  {
    title: '退出',
    path: '/signIn'
  }
];

export const siderPath = [
  {
    title: '基本信息',
    icon: 'global',
    menuItems: [{
      title: '网站信息',
      path: '/base/webMsg'
    }]
  },
  {
    title: '性能分析',
    icon: 'laptop',
    menuItems: [{
      title: '网站性能',
      path: '/performance/webMsg'
    }, {
      title: '资源信息',
      path: '/performance/assetsMsg'
    }]
  },
  {
    title: '数据分析',
    icon: 'bar-chart',
    menuItems: [{
      title: '来源地址',
      path: '/common/referrer'
    }, {
      title: '环境系统',
      path: '/common/system'
    }, {
      title: '用户分析',
      path: '/common/user'
    }]
  },
  {
    title: '错误上报',
    icon: 'notification',
    menuItems: [{
      title: '错误概览',
      path: '/view'
    }, {
      title: '错误定位',
      path: '/view2'
    }]
  }
];