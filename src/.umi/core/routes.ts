// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/Users/lx/Desktop/file/test/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/loading';

export function getRoutes() {
  const routes = [
  {
    "path": "/404",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/lx/Desktop/file/test/src/pages/404.js'), loading: LoadingComponent}),
    "exact": true
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'router' */'C:/Users/lx/Desktop/file/test/src/router.js'), loading: LoadingComponent}),
    "exact": true
  },
  {
    "title": "登录界面",
    "path": "/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'C:/Users/lx/Desktop/file/test/src/pages/login.js'), loading: LoadingComponent}),
    "exact": true
  },
  {
    "title": "test.jsx",
    "path": "/main",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layout__index' */'C:/Users/lx/Desktop/file/test/src/layout/index.js'), loading: LoadingComponent}),
    "routes": [
      {
        "title": "main",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test' */'C:/Users/lx/Desktop/file/test/src/pages/test.jsx'), loading: LoadingComponent}),
        "path": "/main",
        "exact": true
      }
    ]
  },
  {
    "title": "sub-react",
    "path": "/sub-react",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layout__index' */'C:/Users/lx/Desktop/file/test/src/layout/index.js'), loading: LoadingComponent}),
    "routes": [
      {
        "title": "sub-react",
        "path": "/sub-react",
        "microApp": "reactApp",
        "exact": false,
        "component": (() => {
          const { getMicroAppRouteComponent } = umiExports;
          return getMicroAppRouteComponent({ appName: 'reactApp', base: '/', masterHistoryType: 'browser', routeProps: {'settings':{}} })
        })()
      }
    ]
  },
  {
    "title": "sec_sub",
    "path": "/sec_sub",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layout__index' */'C:/Users/lx/Desktop/file/test/src/layout/index.js'), loading: LoadingComponent}),
    "routes": [
      {
        "title": "sec_sub",
        "path": "/sec_sub",
        "microApp": "reactAppSecond",
        "exact": false,
        "component": (() => {
          const { getMicroAppRouteComponent } = umiExports;
          return getMicroAppRouteComponent({ appName: 'reactAppSecond', base: '/', masterHistoryType: 'browser', routeProps: {'settings':{}} })
        })()
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
