import axios from 'axios'
import { Notice } from 'view-ui-plus'
// import { Dialog } from 'element-plus'
// import Qs from "qs";
// import store from "../store";
// import { env } from "../env";
// import { Dialog } from "vant";
// import router from "@/router";

const service = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  timeout: 10000, // ms 10s
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
  // withCredentials: true
  // transformRequest: [
  //   function (data) {
  //     return Qs.stringify(data)
  //   }
  // ]
})

service.interceptors.request.use(
  (config) => {
    console.log('time out1')
    return config
  },
  (error) => {
    console.log('time out2')
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    console.log('time out3')
    console.log('response', response)
    const res = response.data
    return res
  },
  (error) => {
    Notice.error({
      title: '网络响应发生错误',
      desc: error.message,
      duration: 0
    })
    return Promise.reject(error)
  }
)

// const http = {
//   get: function (url) {
//     window.location = env.VUE_APP_BASE_URL + url;
//   },
// };

// export { service, http };

export default service
