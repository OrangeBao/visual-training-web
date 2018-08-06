'use strict'

import axios from 'axios'

let config = {
  baseURL: process.env.VUE_APP_apiUrl || ''
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
const _axios = axios.create(config)

export default {
  install (Vue, store) {
    // 设置loading
    _axios.interceptors.request.use(
      function (config) {
        store.commit('system/showLoading')
        return config
      },
      function (error) {
        store.commit('system/hideLoading')
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    _axios.interceptors.response.use(
      function (response) {
        store.commit('system/hideLoading')
        return response
      },
      function (error) {
        store.commit('system/hideLoading')
        return Promise.reject(error)
      }
    )

    Vue.axios = _axios

    Object.defineProperties(Vue.prototype, {
      $axios: {
        get () {
          return _axios
        }
      }
    })
  }
}
