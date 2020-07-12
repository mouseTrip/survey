import { Module } from 'vuex'
import { User } from '@/types/user'
import { RootState } from '../type'
import { userApi } from '@/api'

const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const FETCH_USER_INFO = 'FETCH_USER_INFO'

const INITIAL_STATE: User = {
  uid: '18510273321',
  phone: '18510273321',
  name: '测试用户',
  avatar: 'http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epHndYpw06K0e60Ijo32q1ia70jfeoiaQfGNXDSTv7YIzcfhOYGibnbKPUGTUrH6xsllgWnicEArXvQLA/132',
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
  },
}
export type UserModule = User
export default user
