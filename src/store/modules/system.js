//* eslint-disable */
// import { login, logout } from '../../api/user'
// import Cache from '@/utils/cacheStorage'
const state = {
    // 登录可能是从cookie里面取， cas的登录信息是存放在cookie里的
    // isLogin: !!Cache.Get('LOGIN_FLAG'),
    httpCount: 0
}

// getters
const getters = {
    // isLogin: state => {
    //     return state.isLogin
    // },
    isLoading: state => {
        return state.httpCount > 0
    }
}

// actions
const actions = {
    //  login({ commit, state }, payload={}) {
    //     login().then(() => commit('login', payload))

    // },
    logout({ commit, state }, payload={}) {
        logout().then(() => commit('logout', payload))
    }
}

// mutations
const mutations = {
    // login(state, { step }) {
    //     state.isLogin = true
    // },
    // logout(state, { step }) {
    //     state.isLogin = false
    // },
    showLoading() {
        state.httpCount += 1
    },
    hideLoading() {
        state.httpCount -= 1
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}