import { Module } from 'vuex'
import { User, Survey } from '../type'
import { RootState } from '../store'
import { userApi, surveyApi } from '@/api'

const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const UPDATE_USER_SURVEYS = 'UPDATE_USER_SURVEYS'
const FETCH_USER_INFO = 'FETCH_USER_INFO'
const FETCH_USER_SURVEYS = 'FETCH_USER_SURVEYS'

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
    [UPDATE_USER_INFO](
      state,
      payload: { phone: string; name: string; avatar: string },
    ) {
      state.phone = payload.phone
      state.name = payload.name || payload.phone
      state.avatar = payload.avatar
    },
    [UPDATE_USER_SURVEYS](state, payload: { surveys: Survey[] }) {
      state.surveys = payload.surveys
    },
  },
  actions: {
    async [FETCH_USER_INFO]({ commit }, payload: { phone: string }) {
      try {
        const { ret, data, msg } = await userApi.getUserInfo({
          phone: payload.phone || '18510273321',
        })
        if (ret === 0) {
          commit(UPDATE_USER_INFO, {
            phone: data.phone || '18510273321',
            name: data.name || '',
            avatar: data.avatar || '',
          })
          return Promise.resolve(data)
        } else {
          return Promise.reject(msg)
        }
      } catch (e) {
        console.error(e)
      }
    },
    async [FETCH_USER_SURVEYS](
      { commit },
      payload: {
        phone: string
      },
    ) {
      try {
        const { ret, data, msg } = await surveyApi.getSurveyList({
          phone: payload.phone || '18510273321',
        })
        if (ret === 0) {
          commit(UPDATE_USER_SURVEYS, {
            surveys: data.list.map(item => ({
              ...item,
              subjects: item.subjects ? JSON.parse(item.subjects) : '',
            })),
          })
          return Promise.resolve(data)
        } else {
          return Promise.reject(msg)
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
}
export type UserModule = User
export default user
