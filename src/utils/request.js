import axios from 'axios'
import { includes, is, prop } from 'ramda'
import { BASE_API_URL } from 'constants/api'
// import { SIGN_IN_PATH } from 'constants/routes'
// import { getToken, setToken } from 'constants/token'
import toSnakeCase from './toSnakeCase'
import toCamelCase from './toCamelCase'

const SIGN_IN_PATH = '/sign-in'

export const transformResponse = (data, response) => {
  const CONTENT_TYPE_JSON = 'application/json'
  const responseContentType = prop('content-type', response)

  if (responseContentType && includes(CONTENT_TYPE_JSON, responseContentType)) {
    return toCamelCase(JSON.parse(data))
  }

  if (is(Object, data) || is(Array, data)) {
    return toCamelCase(data)
  }

  return data
}

const onFulfilled = response => response
const onRejected = error => {
  if (error.message === 'Network Error') {
    const networkError = { response: { data: { nonFieldErrors: ['No internet.'] } } }

    return Promise.reject(networkError)
  }

  const UNAUTHORIZED = 401
  const status = error.response.status

  if (status === UNAUTHORIZED) {
    // setToken()
    window.history.pushState({}, '', SIGN_IN_PATH)
  }

  return Promise.reject(error)
}

const getHeaders = async () => {
  // const token = getToken()
  const token = ''

  return {
    Authorization: token ? `Token ${token}` : ''
  }
}

const getHttpRequest = () => {
  const config = {
    baseURL: BASE_API_URL,
    transformResponse: [transformResponse]
  }

  const instance = axios.create(config)
  instance.interceptors.response.use(onFulfilled, onRejected)

  return instance
}

export default {
  get: async (url, params) => {
    const http = getHttpRequest()
    const headers = await getHeaders()

    return http({
      method: 'get',
      params: toSnakeCase(params),
      url,
      headers
    })
  },
  post: async (url, data) => {
    const http = getHttpRequest()
    const headers = await getHeaders()

    return http({
      method: 'post',
      data: toSnakeCase(data),
      url,
      headers
    })
  },
  put: async (url, data) => {
    const http = getHttpRequest()
    const headers = await getHeaders()

    return http({
      method: 'put',
      data: toSnakeCase(data),
      url,
      headers
    })
  },
  delete: async (url, data) => {
    const http = getHttpRequest()
    const headers = await getHeaders()

    return http({
      method: 'delete',
      data: toSnakeCase(data),
      url,
      headers
    })
  },
  upload: async (url, data, onUploadProgress) => {
    const http = getHttpRequest()
    const headers = await getHeaders()

    return http({
      method: 'post',
      data,
      url,
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    })
  }
}
