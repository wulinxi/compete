import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  // 所有请求都会加这个前缀
  // baseURL: process.env.VUE_APP_BASE_API,
  // 设置超时，后端超过时间无返回值就会报错
  timeout: 20000
})

// 响应拦截器，用来统一处理后端发过来的数据
request.interceptors.response.use(
  (response) => {
    // response 是 axios 封装好的响应
    // response.data 是后端传过来的响应正文
    const res = response.data

    // 如果后端返回的状态码不为 1
    if (res.code !== 1) {
      // 返回一个错误
      return Promise.reject(new Error(res.message || 'Error'))
    }

    // 处理完毕，返回响应供后续操作
    return res;
  },
  (error) => {
    // 请求发生错误，弹窗显示错误信息
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 返回一个错误
    return Promise.reject(error)
  }
)

export default request
