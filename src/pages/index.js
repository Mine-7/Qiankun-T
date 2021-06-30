import PushMessageModal from "@/components/pushMessage/pushMessageModal";
import { Button } from "antd";
import { connect } from "dva";
import React, { Component, Fragment } from "react";
import { history } from "umi";
import BlockDemo from "./BlockDemo";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushMessageModalVisible: false
    };
  } // componentDidMount(){
  //   console.log(localStorage.getItem('token'))
  // }

  handleGoUser = () => {
    history.push("/list");
  };
  handleGoMap = () => {
    history.push("/map");
  };
  getData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: "country/fetch",
      payload: {
        text: "这是测试数据"
      }
    });
  };
  getTestData = () => {
    // const { dispatch } = this.props; // dispatch({
    //   type:'country/getTestData',
    //   payload:{
    //     url:'/admin/communication/list',
    //     data:'测试数据'
    //   }
    // })

    const token = localStorage.getItem("token"); // console.log(tokenData)

    if (token === null) {
      return;
    } else {
      // dispatch({
      //   type: 'users/fetchUserPower',
      //   payload: {
      //     token,
      //   },
      // });
    }
  };
  handleGoTotalVideo = () => {
    history.push("/totalVideo");
  };
  handleGoMangement = () => {
    history.push("/management");
  };
  handleTestPushModal = () => {
    const { pushMessageModalVisible } = this.state;
    console.log("测试推送的函数");
    this.setState({
      pushMessageModalVisible: !pushMessageModalVisible
    });
  }; // websocketTest=()=>{
  //   // console.log('测试websocket')
  //   // 测试中，本地的node无法连接，但是node编写的代码可以正常连接
  //   const websocket=new WebSocket('ws://localhost:18001/');// :18001/
  //   websocket.onopen = function()
  //   {
  //     // Web Socket 已连接上，使用 send() 方法发送数据
  //     websocket.send("发送数据");
  //     console("数据发送中...");
  //   };
  //   // 接收服务端数据时触发事件
  //   websocket.onmessage = function(evt) {
  //     const received_msg = evt.data;
  //     console.log('数据已接收...',received_msg);
  //   };
  //   // 断开 web socket 连接成功触发事件
  //   websocket.onclose = function() {
  //     console.log('连接已关闭...');
  //   };
  //   switch(websocket.readyState){
  //     case(1):{
  //       console.log('连接成功')
  //       break;
  //     }
  //     case(2):{
  //       console.log('连接正在中断')
  //       break;
  //     }
  //     case(3):{
  //       console.log('连接已中断')
  //       break;
  //     }
  //     default:{
  //       console.log('正在连接，请稍候')
  //     }
  //   }
  // }

  render() {
    const { pushMessageModalVisible } = this.state;
    const PushMessageProps = {
      ModalVisible: pushMessageModalVisible,
      handleCancel: this.handleTestPushModal // console.log(this.props.match)
    };
    return (
      <Fragment>
        <BlockDemo />
        <Button type="default" onClick={() => this.handleGoUser()}>
          点击此处跳转到用户界面{" "}
        </Button>
        <br />
        <Button type="default" onClick={() => this.getData()}>
          点击此处获取数据层数据{" "}
        </Button>
        <br />
        <Fragment>
          这里是数据层的数据{this.props.country.data} 一共有
          {this.props.country.total}条
        </Fragment>

        <Button type="default" onClick={() => this.getTestData()}>
          测试接口{" "}
        </Button>
        <br />

        <Button onClick={this.handleTestPushModal}>测试推送组件</Button>
        <br />

        {/* <Button type='default' onClick={this.websocketTest}>测试  websocket连接 </Button><br /> */}

        <Button type="default" onClick={this.handleGoMangement}>
          点击切换到系统管理后台{" "}
        </Button>
        <PushMessageModal {...PushMessageProps} />
      </Fragment>
    );
  }
}

export default connect(({ country, users }) => ({
  country,
  users
}))(Main);
