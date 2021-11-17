import UrlPattern from 'url-pattern'
import { ajax } from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs'

import type { Endpoint } from '~/constants/endpoints'

interface Options {
  endpoint?: Endpoint
  params?: Record<string, unknown>
  query?: Record<string, unknown>
  body?: Record<string, unknown>
  headers?: Headers
  config?: Record<string, unknown>
}

const generateUrl = (urlString: string, params = {}, query?: Record<string, unknown>): string => {
  let endpoint = ''
  if (urlString) {
    const pattern = new UrlPattern(urlString)
    endpoint = pattern.stringify(params)
  }
  if (query) {
    const queryParam = new URLSearchParams()
    Object.keys(query).forEach((key) => {
      queryParam.append(key, query[key] as string)
    })
    endpoint = `${endpoint}?${queryParam.toString()}`
  }
  return `https://dev.dummy-api.alamisharia.co.id/${endpoint}`
}

interface Headers {
  [key: string]: string | number
}

export default function api(options?: Options) {
  const {
    endpoint = ['get', ''],
    params = {},
    query,
    body,
    headers = {} as Headers,
    config = {},
  } = options || {}

  const [method, path] = endpoint
  const url = generateUrl(path, params, query)

  headers['Content-Type'] = 'application/json'

  return ajax({
    url,
    method,
    headers,
    body,
    timeout: 20000,
    ...config,
  }).pipe(
    map((result) => result),

    catchError((error) => {
      return throwError(() => new Error(error as string))
    }),
  )
}
