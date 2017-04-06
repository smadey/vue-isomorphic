import Vue from 'vue'
import Vuex from 'vuex'
import { getPage1List, getPage2List } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page1List: [],
    page2List: []
  },

  mutations: {
    SET_PAGE1_LIST(state, { list }) {
      state.page1List = list
    },
    SET_PAGE2_LIST(state, { list }) {
      state.page2List = list
    },
  },

  actions: {
    FETCH_PAGE1_LIST({ commit }) {
      return getPage1List()
        .then(list => commit('SET_PAGE1_LIST', { list, list }))
    },
    FETCH_PAGE2_LIST({ commit }) {
      return getPage2List()
        .then(list => commit('SET_PAGE2_LIST', { list, list }))
    },
  },

  getters: {
  }
})

export default store
