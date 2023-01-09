/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'

enum HttpStatusCode {
  OK = 200,
  UNAUTHORIZED = 401,
  SERVICE_UNAVAILABLE = 503
}

export interface IConfigAxios {
  ignoreToken?: boolean
  contentType?: string
  responseType?: 'arraybuffer'
}

const errorMessage = {
  UNABLE_CONNECT: `Unable to connect to the server`
}

const validateStatus = (status: number): boolean => {
  return status === HttpStatusCode.OK
}

const getHeaders = (config: IConfigAxios) => {
  const token = ''
  const header = {
    'Content-Type': config.contentType || 'application/json',
    Accept: 'application/json'
  }

  if (token && !config.ignoreToken) {
    return {
      ...header,
      Authorization: `Bearer ${token}`
    }
  }

  return header
}

const callApi = async <T>(
  method: Method,
  url: string,
  payload: any,
  config: IConfigAxios = {
    ignoreToken: true
  }
): Promise<AxiosResponse<T>> => {
  const headers: any = getHeaders(config)
  const options = {
    method,
    headers,
    responseType: config.responseType,
    data: payload ? JSON.stringify(payload) : undefined,
    url,
    validateStatus
  } as AxiosRequestConfig

  return axios(options)
}

const post = async <T>(
  url: string,
  data?: unknown,
  config?: IConfigAxios
): Promise<T> => {
  const response = await callApi<T>('POST', url, data, config)
  if (response.status === HttpStatusCode.OK) {
    return response.data
  }
  return {} as T
}

const get = async <T>(url: string, config?: IConfigAxios): Promise<T> => {
  const response = await callApi<T>('GET', url, null, config)
  if (response.status === HttpStatusCode.OK) {
    return response.data
  }
  return {} as T
}

const remove = async <T>(url: string, config?: IConfigAxios): Promise<T> => {
  const response = await callApi<T>('DELETE', url, null, config)
  if (response.status === HttpStatusCode.OK) {
    return response.data
  }
  return {} as T
}

export default { post, get, remove }
