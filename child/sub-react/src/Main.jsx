import React, { Component } from "react";
import pic from "./assets/logo192.png";

export default class Main extends Component {
  render() {
    const { history, propsMainAPP } = this.props;
    console.log(this.props);
    return (
      <div>
        Main
        <img src={pic} alt="" />
        <button
          onClick={() => {
            propsMainAPP.historyMain("/main");
          }}
        >
          主应用页面
        </button>
      </div>
    );
  }
}
