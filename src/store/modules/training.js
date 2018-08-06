const state = {
  currentStep: 1,
  totalStep: 10
}

// getters
const getters = {
  currentStep: state => {
    return state.currentStep
  },
  totalStep: state => {
    return state.totalStep
  }
}

const actions = {
  setTotalStep ({ commit, state }, payload = {}) {
    commit('setTotalStep', payload)
  }
}

// mutations
const mutations = {
  setTotalStep ({ totalStep }) {
    state.totalStep = totalStep
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
