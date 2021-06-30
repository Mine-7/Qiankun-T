import {defineConfig} from "umi";
const myRouter = require("./src/routers/index").globeRouters.routes;

export default defineConfig({
  base: "/",
  dva: {
    immer: true
  },
  dynamicImport: {
    loading: "@/loading"
  },
  lessLoader: { javascriptEnabled: true },
  title: "测试项目",
  // theme: {
  //   // "@primary-color":
  // },
  runtimePublicPath: true,
  // publicPath: "https://rm/develop/", //示例链接 此处替换发布环境
  routes: myRouter,
  // exportStatic: {},
  cssLoader: {},
  ignoreMomentLocale: true,
  hash: true,

  define: {
    // 添加这个自定义的环境变量
    "process.env.UMI_ENV": process.env.UMI_ENV, // * 本地开发环境：基本，测试服：dev，正式服：product
    "process.env.name": "测试环境的后台",
    "process.env.proxyData": "http://t-apidodm", //测试接口地址 示例
    "process.env.REACT_APP_SUB_REACT":'http://localhost:3000/', // 子应用entry
    "process.env.REACT_APP_SUB_REACT_SECOND":'http://localhost:3001/',  // 子应用entry
  },
  // 本地变量为了加速编译，如线上有问题则注释编译
  nodeModulesTransform: {
    type: "none",
    exclude: []
  },
  alias: {
    src: require("path").resolve(__dirname, "./src")
  },
  polyfill: {
    imports: ["core-js/stable"]
  },
  targets: {
    ie: 11
  },
  qiankun:{
    master: {
      // 注册子应用信息
      apps: [
        {
          name: "reactApp", // 子应用名称
        },
        {
          name: "reactAppSecond",
        },
      ],
    },
  }
});
