import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./Main";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./public-path.js";

function render(props) {
  const { container } = props;
  console.log(props);
  ReactDOM.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/sec_sub" : "/child/sec_sub"}
    >
      <Switch>
        <Route
          path="/"
          exact
          render={(propsAPP) => <App {...propsAPP} propsMainAPP={props} />}
        ></Route>
        <Route path="/main" exact component={Main}></Route>
        <Route path="/home" exact component={Home}></Route>
        {/* 子应用一定不能写，否则会出现路由跳转bug */}
        {/* <Redirect from="*" to="/"></Redirect>   */}
      </Switch>
    </BrowserRouter>,
    container
      ? container.querySelector("#root-sub-app-sec")
      : document.querySelector("#root-sub-app-sec")
  );
}

//  表示子应用处于非qiankun内的环境，即独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  console.log("独立运行时");
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  props.setGlobalState({ username: "11111", password: "22222" });
  console.log("[react16] props from main framework", props);
  console.log(props.singleSpa.getAppStatus());
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root-sub-app-sec")
      : document.querySelector("#root-sub-app-sec")
  );
}
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter
//       basename={window.__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}
//     >
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root-sub-app-sec")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
