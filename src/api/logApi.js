import fetch from './fetch'

/**
 * 日志服务API
 *
 */
const logApi = {
  getLog: (config) =>
    fetch({
      url: '/api/v1/logs/getLog',
      method: 'post',
      data: config
    })
}

export default logApi
