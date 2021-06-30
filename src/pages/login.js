import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { history } from "umi";
import { initGlobalState } from "qiankun";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 10,
  },
};

// 此为暂时用的登录界面

const Login = () => {
  // main/src/main.js
  // 初始化 state
  const [user, setUser] = useState({ username: "", password: "" });
  const actions = initGlobalState(user);
  actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  });
  actions.setGlobalState(user);
  actions.offGlobalStateChange();

  const onFinish = (values) => {
    console.log("Success:", values);
    setUser(values);
    history.push("/main");
    localStorage.setItem("token", "wqeqeqedwaszd12314231sa12312esd");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: "20vh" }}>
      <div style={{ textAlign: "center", width: "100%" }}>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "#6492F7",
            margin: "0 auto 20px auto",
          }}
        ></div>
      </div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入姓名!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录1
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
