import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  headerShow: false,
  headerTop: 0,
}

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_HEADER(state, h) {
      state.headerHeight = h
    }
  }
})
