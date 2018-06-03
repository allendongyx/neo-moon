import fetch from 'dva/fetch'
import { openApiUrl } from '../app.config'

function parseJSON (response) {
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const defaultOptions = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export const requestOpenApi = async function (url, options) {
  url = openApiUrl + url
  return fetch(url, {
    ...defaultOptions,
    ...options
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      const { code } = data
      if (code === 401) {
        // todo
      }
      return data
    })
    .catch(err => {
      return err
    })
}
