import { RequestConfig, history } from "umi";
import { SUB_REACT, SUB_REACT_SECOND } from "@/utils/proxy";

// 子应用传递参数使用
export const qiankun = {
    master: {
      // 注册子应用信息
      apps: [
        {
          entry: SUB_REACT, // html entry
          name: "reactApp", // 子应用名称
          container: "#subapp", // 子应用挂载的 div
          activeRule: "/sub-react",
          props: {
            // 子应用传值
            msg: {
              data: {
                mt: "you are one",
              },
            },
            historyMain: (value:any) => {
              history.push(value);
            },
          },
        },
        {
          entry: SUB_REACT_SECOND, // html entry
          name: "reactAppSecond",
          container: "#subapp", // 子应用挂载的div
          activeRule: "/sec_sub",
           props: {
            // 子应用传值
            msg: {
              data: {
                mt: "you are one",
              },
            },
            historyMain: (value:any) => {
              history.push(value);
            },
          },
        },
      ],
    },
  }

export async function getInitialState() {
  // const data = await fetchXXX();
  // return data;
}

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData: any) => {
      return {
        ...resData,
        success: resData.errorno === 0,
        errorMessage: resData.msg
      };
    }
  }
};
