// import Vue from 'vue'
import axios, {
  AxiosResponse,
  AxiosError
} from 'axios'

const instance = axios.create({
  timeout: 60000
})
// 统一处理ajax失败
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // new Vue().$toast.hide()
    const response = res.data
    if (
      response.status !== '100' &&
      typeof response.errorMessges !== 'undefined' &&
      Array.isArray(response.errorMessges)
    ) {
      // new Vue().$toast.text(response.errorMessges[0].message.trim())
      return Promise.reject()
    }
    return res
  },
  (error: AxiosError) => {
    // new Vue().$toast.text('网络中断了，请重试')
    return Promise.reject(error)
  }
)

export const http = instance
