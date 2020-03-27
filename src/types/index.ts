export type Method = 'get' | 'post' | 'put' | 'delete' | 'options' | 'patch'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  params?: any
  data?: any
}
