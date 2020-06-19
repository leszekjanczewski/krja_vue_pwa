import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '../axios-auth'
import router from '@/router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    login ({ commit }, authData) {
      axiosInstance.post('/accounts:signInWithPassword?key=AIzaSyCIkBhe9DxGFTtbEQQUXaAj_7Gt7W43WRg', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          router.replace('/admin')
        })
        .catch(error => console.log(error))
    },
    logout ({ commit }) {
      commit('clearAuthData')
      router.replace('/')
    }
  },
  modules: {
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})
