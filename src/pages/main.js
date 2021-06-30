import { Button } from "antd";
import React, { Component, Fragment } from "react";
import { history } from "umi";

class Main extends Component {
  handleGoLogin = () => {
    history.push("/management");
  };

  render() {
    // console.log(this.props.match)
    return (
      <Fragment>
        <h1>这是登录界面</h1>
        <Button type="primary" onClick={() => this.handleGoLogin()}>
          点击此处跳转到用户界面{" "}
        </Button>
      </Fragment>
    );
  }
}
export default Main;
