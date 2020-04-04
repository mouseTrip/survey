import { Module } from 'vuex'
import { RootState, User, Survey } from '../type'

const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_USER_SURVEYS = 'UPDATE_USER_SURVEYS'

const INITIAL_STATE: User = {
  phone: '',
  name: '',
  avatar: '',
  surveys: [],
}
const user: Module<User, RootState> = {
  namespaced: true,
  state: INITIAL_STATE,
  getters: {},
  mutations: {
    [UPDATE_USER_INFO](state, payload: { phone: string; name?: string }) {
      state.phone = payload.phone
      state.name = payload.name || payload.phone
    },
    [UPDATE_USER_SURVEYS](state, payload: { surveys: Survey[] }) {
      state.surveys = payload.surveys
    },
  },
  actions: {},
}

export default user
