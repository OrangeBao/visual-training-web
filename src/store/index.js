import Vue from 'vue'
import Vuex from 'vuex'
import system from './modules/system'
import training from './modules/training'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system,
    training
  },
  strict: true
})
