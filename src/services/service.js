import request from "../utils/request";
// import {stringify} from 'qs'


export async function getData(params){
  console.log(`这是我从页面上获取的数据${params}`)
  return `  这是我从页面上获取的数据(${params})  `
}


export async function testApi(params){
  return request(params.url, {
  method: 'POST',
  body:params.data,
})
}


// 请求示例
// export async function testApi(){
//   return request(`/api/campaign/audit/${id}?${stringify(params)}`, {
//   method: 'GET',
//   // body:params,
// });
// }
