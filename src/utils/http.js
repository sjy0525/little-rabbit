import axios from 'axios'
import { ElMessage } from 'element-plus'
const httpInstance=axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 3000
})
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  ElMessage({
    type:'warning',
    message:e.response.data.msg
  })
  return Promise.reject(e)
})
export default httpInstance
