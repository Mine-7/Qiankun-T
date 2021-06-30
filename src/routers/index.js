exports.globeRouters = {
  routes: [
    // { path: '/', component: '../pages/main.js'},
    { path: "/404", component: "./404.js" },
    { path: "/", component: "../router.js" },
    { title: "登录界面", path: "/login", component: "./login.js" },
    {
      title: "test.jsx",
      path: "/main",
      component: "../layout/index.js",
      routes: [
        {
          title: "main",
          component: "../pages/test.jsx",
          path: "/main",
        },
      ],
    },
    {
      title: "sub-react",
      path: "/sub-react",
      component: "../layout/index.js",
      routes: [
        {
          title: "sub-react",
          path: "/sub-react",
          microApp: "reactApp",
          microAppProps: {
            autoSetLoading: true, // 开启子应用loading
            // className: "reactAppSecond", // 子应用包裹元素类名
            // wrapperClassName: "myWrapper",
          },
        },
      ],
    },
    {
      title: "sec_sub",
      path: "/sec_sub",
      component: "../layout/index.js",
      routes: [
        {
          title: "sec_sub",
          path: "/sec_sub",
          microApp: "reactAppSecond",
          microAppProps: {
            autoSetLoading: true, // 开启子应用loading
            // className: "reactAppSecond",
            // wrapperClassName: "myWrapper",
          },
        },
      ],
    },
    // 路由   示例
    // {
    //   title:'账户管理',
    //   path: '/management',
    //   icon: 'user',
    //   main:'/management/users',
    //   component: '../layout/index.js',
    //   routes: [
    //     {
    //       title:'修改账户',
    //       path: '/management/users/edit/:id',
    //       component: './ManagementBackstage/user/edit',
    //       showMenu:false,
    //     },
    //     {
    //       title:'新增账户',
    //       path: '/management/users/add',
    //       component: './ManagementBackstage/user/add',
    //       showMenu:false,
    //     }
    //   ]
    // },
  ],
};
