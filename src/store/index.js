import UserApi from '@/api/userApi'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: '',
      password: '',
      state: '',
      prefix: ''
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    GetUser: function ({ commit }, config) {
      console.log('config', config)
      return new Promise((resolve, reject) => {
        UserApi.getUser(config)
          .then((res) => {
            // 缺少对异常的处理
            console.log('res1', res)
            if (res.status) {
              console.log('res2', res)
              commit('SET_USER', res.data)
              resolve(res.data)
            } else {
              reject(res)
            }
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  // getters: {
  //   // 定义一个getters
  //   authUser (state) {
  //     return state.user
  //   }
  // },
  modules: {}
})
