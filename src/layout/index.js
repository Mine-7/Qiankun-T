import { Button, Col, Layout, Row, Menu } from "antd";
import { connect } from "dva";
import React, { Component } from "react";
// import MyBreadCrumb from './MyBreadCrumb';
import MyMenu from "./MyMenu";
import Styles from "./style.less";
import { SUB_REACT, SUB_REACT_SECOND } from "@/utils/proxy";
import { registerMicroApps, start, loadMicroApp } from "qiankun";
import { history } from "umi";
import { NavLink } from "react-router-dom";
// registerMicroApps([
//   {
//     name: "reactApp", // 子应用名称
//     entry: SUB_REACT, // 子应用入口路径
//     container: "#subapp", // 子应用挂载的div
//     activeRule: "/sub-react",
//     props: {
//       // 子应用传值
//       msg: {
//         data: {
//           mt: "you are one",
//         },
//       },
//       historyMain: (value) => {
//         history.push(value);
//       },
//     },
//   },
//   {
//     name: "reactAppSecond",
//     entry: SUB_REACT_SECOND,
//     container: "#subapp", // 子应用挂载的div
//     activeRule: "/sec_sub",
//     props: {
//       msg: {
//         data: {
//           mt: "you are one",
//         },
//       },
//     },
//   },
// ]);
const { Header, Content, Footer, Sider } = Layout;

/**
 * @description  管理系统的基本布局
 * @class SiderMenu
 * @extends {Component}
 */
class SiderMenu extends Component {
  state = {
    collapsed: false,
    // current:
    //   window.location.pathname === "/sec_sub/"
    //     ? "/sub-react"
    //     : window.location.pathname,
    current: window.location.pathname.split("/")[1],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const { dispatch } = this.props;
    // dispatch({
    //   type: "users/fetchUser",
    //   payload: token,
    // });
    // 启动 qiankun 否则主应用热加载有问题
    start({ prefetch: true, strictStyleIsolation: true });
  }

  onCollapse = (collapsed) => {
    // console.log(collapsed);
    this.setState({ collapsed });
  };
  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "users/logout",
    });
  };
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const {
      users: { userinfo },
    } = this.props;
    const MenuData = [
      {
        title: "main",
        path: "/main",
      },
      {
        title: "sub-react",
        path: "/sub-react",
      },
      {
        title: "sec_sub",
        path: "/sec_sub",
      },
    ];
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          trigger={null}
        >
          <div className={Styles.logo}>
            <span style={{ color: "#fff" }}>后台管理系统</span>
          </div>
          <Menu onClick={this.handleClick} selectedKeys={this.state.current}>
            <Menu.Item key="main">
              <NavLink to={"/main"} />
              main
            </Menu.Item>
            <Menu.Item key="sub-react">
              <NavLink to={"/sub-react"} />
              sub-react
            </Menu.Item>
            <Menu.Item key="sec_sub">
              <NavLink to={"/sec_sub"} />
              sec_sub
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Row type="flex" justify="end">
              <Col span={4}>
                <span style={{ marginRight: "2vw" }}>
                  欢迎 {userinfo.name || ""}
                </span>
                <Button onClick={this.handleLogout}>退出登录</Button>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: "3px 3px" }}>
            <div
              id="subapp"
              style={{ padding: 24, background: "#fff", minHeight: 360 }}
            >
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(({ users }) => ({
  users,
}))(SiderMenu);
