import { defineConfig } from "umi";
const myRouter = require("./src/routers/index").globeRouters.routes;

export default defineConfig({
  base: "/",
  dva: {
    immer: true
  },
  dynamicImport: {
    loading: "@/loading"
  },
  title: "测试项目",
  theme: {
    "@primary-color": "#6492F7"
  },
  // runtimePublicPath:true,
  publicPath:'https:// xxx.com/xxx/tt-qiankun/develop/',// 测试地址
  routes: myRouter,
  // exportStatic: {},
  cssLoader: {},
  ignoreMomentLocale: true,
  define: {
    // 添加这个自定义的环境变量
    "process.env.UMI_ENV": process.env.UMI_ENV, // * 本地开发环境：基本，测试服：dev，正式服：product
    "process.env.name": "测试环境的后台",
    "process.env.proxyData": "http://tapim", //测试接口地址
    "process.env.REACT_APP_SUB_REACT":'http://tt-qiankun.xxx.com/child/sub-react/',  // 子应用entry
    "process.env.REACT_APP_SUB_REACT_SECOND":'http://tt-qiankun.xxx.com/child/sub-react-second/',  // 子应用entry
  },

  alias: {
    src: require("path").resolve(__dirname, "./src")
  },
  qiankun:{
    master: {
      // 注册子应用信息
      apps: [
        {
          // entry: 'http://tt-qiankun.xxx.com/child/sub-react/', // html entry
          name: "reactApp", // 子应用名称
          container: "#subapp", // 子应用挂载的 div
          activeRule: "/sub-react",
        },
        {
          // entry: 'http://tt-qiankun.xxx.com/child/sub-react-second/', // html entry
          name: "reactAppSecond",
          container: "#subapp", // 子应用挂载的div
          activeRule: "/sec_sub",
        },
      ],
    },
  },
  chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: ".",
          cacheGroups: {
            vendor: {
              name: "vendors",
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10
            }
          }
        }
      }
    });
  },
  hash: true,
  targets: {
    ie: 11
  },
});
