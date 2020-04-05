import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

let BASE_URL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = '/api'
    break
  default:
    BASE_URL = ''
}

const errorHandler = (res: AxiosResponse) => {
  const { status } = res
  switch (status) {
    case 401:
      return ''
    default:
      return ''
  }
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
  timeout: 5000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    console.error(error)
    return Promise.reject('请求出错')
  },
)

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res.data)
  },
  (error: any) => {
    const { response }: { response?: AxiosResponse } = error
    if (response) {
      return Promise.reject(errorHandler(response))
    } else {
      return Promise.reject('网络超时')
    }
  },
)

export default instance
