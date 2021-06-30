import React, { Component } from "react";
import { Menu, Icon, Spin } from "antd";
import { NavLink } from "react-router-dom";
import { history } from "umi";

const { SubMenu } = Menu;

class MyMenu extends Component {
  state = {
    menupath: window.location.pathname,
  };
  componentDidMount() {
    const MenuData = this.props.menuData;
    const { handle } = this.props;
    handle();
  }
  render() {
    const MenuData = this.props.menuData;
    // console.log("TCL: MyMenu -> render -> MenuData", MenuData)
    console.log(this.state.menupath);
    const { handle } = this.props;
    console.log(window.location.pathname);
    return (
      <div>
        {MenuData.length > 0 ? (
          <Menu
            theme="dark"
            defaultSelectedKeys={[MenuData[0].path]}
            mode="inline"
            selectedKeys={this.state.menupath}
            onClick={(e) => {
              // this.setState({
              //   menupath: e.key,
              // });
              history.push(e.key);
              handle();
            }}
          >
            {MenuData.map(
              (item) => (
                // item.child ? (
                //   <SubMenu
                //     key={item.path}
                //     title={
                //       <span>
                //         <Icon type={item.icon || ""} />
                //         <span>{item.title || ""}</span>
                //       </span>
                //     }
                //   >
                //     {typeof item.routes !== "undefined" && item.routes.length > 0
                //       ? item.routes.map((childrenData) => (
                //           <Menu.Item key={childrenData.path}>
                //             <NavLink to={childrenData.path} />
                //             {childrenData.title}
                //           </Menu.Item>
                //         ))
                //       : "暂无菜单数据"}
                //   </SubMenu>
                // ) : (
                <Menu.Item key={item.path}>{item.title}</Menu.Item>
              )
              // )
            )}
          </Menu>
        ) : (
          <Spin />
        )}
      </div>
    );
  }
}

export default MyMenu;
