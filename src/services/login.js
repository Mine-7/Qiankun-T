import request from '../utils/request';
import {stringify} from 'qs';
import {proxyData} from '@/utils/proxy';

// const token =localStorage.getItem('token')


// 获取token
export async function login(params){
  return request(`${proxyData}/接口示例?${stringify(params)}`,{
      method:'GET',
  })
}
// 获取用户信息
// export async function getLoginInfo(params){
//     return request(`http://t.api.h5mo.com/v1/wxlogin/get_login_info`,{
//         method:'POST',
//         body:params,
//     })
// }

// token换取用户信息
export async function getPower(params){
  return request(`${proxyData}/接口示例`, {
    method: 'GET',
  });
}
