import AuthServices from '../../apis/modules/auth'
import Api from '../../apis'

const state = {
  token: '',
  user: null,
}

const getters = {
  authenticated(state) {
    return state.token && state.user
  },
  user(state) {
    return state.user
  },
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, data) {
    state.user = data
  },
}

const actions = {
  async logIn({ dispatch }, credentials) {
    const response = await AuthServices.logIn(credentials)
    await dispatch('attempt', response.data.token)
  },
  async attempt({ commit, state }, token) {
    if (token) {
      commit('SET_TOKEN', token)
    }

    if (!state.token) {
      return
    }

    try {
      let response = await Api().get('auth/me')
      commit('SET_USER', response.data)
    } catch (error) {
      commit('SET_TOKEN', null)
      commit('SET_USER', null)
    }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
