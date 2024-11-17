import { useUserStore } from '@/stores/login'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const httpInstance=axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 3000
})
// axios请求拦截器

// 基础思想：很多接口如果想要获取数据必须要带着有效的Token信息才可以，拦截器中做一次，用到axios实例的其他都可以拿到
httpInstance.interceptors.request.use(config => {
  const userStore=useUserStore()
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

import { useRouter } from 'vue-router'
// const useStore=useUserStore()
// const router=useRouter()
// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  const router=useRouter()
  const useStore=useUserStore()
  ElMessage({
    type:'warning',
    message:e.response.data.msg
  })
  //401 token失效处理
  if(e.response.status===401){
    useStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})
export default httpInstance
