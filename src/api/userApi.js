import fetch from './fetch'

/**
 * 用户服务API
 *
 */
const userApi = {
  getUser: (config) =>
    fetch({
      url: '/api/v1/users/getUser',
      method: 'post',
      data: config
    })
}

export default userApi
