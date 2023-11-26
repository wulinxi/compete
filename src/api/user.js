import request from "@/utils/request";

/** 登录 */
export function login(data) {
  return request({
    url: '/api/login',
    method: 'post',
    data: data,
  });
}
