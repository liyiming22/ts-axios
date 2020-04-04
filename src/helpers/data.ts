import { isPlainObject } from './util'

export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any): any {
  if ('string' === typeof data) {
    try {
      data = JSON.stringify(data)
    } catch (e) {
      // to do
    }
  }
  return data
}
