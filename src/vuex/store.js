import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  headerShow: false
}

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_HEADER(state, flag) {
      state.headerShow = flag
    }
  }
})
