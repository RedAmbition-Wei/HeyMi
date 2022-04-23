import request from '@/utils/request'

const api = {
  list: '/api/orders/index',
  info: '/api/orders/info',
  edit: '/api/orders/edit',
  add: '/api/orders/add',
  sifuData: '/api/orders/sifu_data',
  editStatus: '/api/orders/set_status',
  useredit: '/api/orders/useredit',
}

export default api

export function getOrderList (parameter) {
  return request({
    url: api.list,
    method: 'post',
    data: parameter
  })
}
export function getSifuOrderList (parameter) {
  return request({
    url: api.sifuData,
    method: 'get',
    params: parameter
  })
}
export function getOrderInfo (parameter) {
  return request({
    url: api.info,
    method: 'get',
    params: parameter
  })
}
export function addOrder (data) {
  return request({
    url: api.add,
    method: 'post',
    data
  })
}
export function editOrder (data) {
  return request({
    url: api.edit,
    method: 'post',
    data
  })
}
//修改状态
export function setStatus (data) {
  return request({
    url: api.editStatus,
    method: 'post',
    data
  })
}
export function ueditOrder (data) {
  return request({
    url: api.useredit,
    method: 'post',
    data
  })
}
