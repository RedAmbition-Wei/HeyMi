import request from '@/utils/request'

const userApi = {
	Login: '/api/user/login'
}

export function login (data) {
  return request({
    url: userApi.Login,
    method: 'post',
    data
  })
}
