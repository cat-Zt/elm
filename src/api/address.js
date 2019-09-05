import request from '@/utils/request.js'

const address = {
  getHotCity (params) {
    return request({
      url: '/hot',
      method: 'get',
      params: params
    }).then(res => res)
  }
}
export default address
