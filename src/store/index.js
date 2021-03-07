import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './simple-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    countText(state) {
      return '数字' + state.count
    }
  },
  mutations: {
    increment(state, payload) {
      state.count += payload
    }
  },
  actions: {
    asyncIncrement({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 1000)
    }
  }
})