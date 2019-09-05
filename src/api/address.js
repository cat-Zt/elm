import request from '@/utils/request.js'

const address = {
  getHotCity (params) {
    return request({
      url: '/hot',
      method: 'get',
      params: params
    }).then(res => res)
  },
  getAllCity (params) {
    return request({
      url: '/allcity',
      method: 'get',
      params: params
    })
  }
}
export default address
