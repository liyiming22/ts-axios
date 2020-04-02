import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers = {} } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  // if (headers) {
  Object.keys(headers).forEach(name => {
    if (null === data && 'content-type' === name.toLowerCase()) {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  // }

  request.send(data)
}
