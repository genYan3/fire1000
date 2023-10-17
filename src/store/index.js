import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index:"1"
  },
  getters: {
  },
  mutations: {
    setIndex(state,value){
      state.index = value
    }
  },
  actions: {
  },
  modules: {
  }
})
