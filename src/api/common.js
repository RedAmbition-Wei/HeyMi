import request from '@/utils/request'
export function upload (data) {
  return request({
    url: '/api/common/upload',
    method: 'post',
	headers: {'Content-Type': 'multipart/form-data'},
    data
  })
}

export function getHeadData (data) {
  return request({
    url: '/api/mobile/gethead',
    method: 'POST',
	data
  })
}


export function getIndexData (data) {
  return request({
    url: '/api/mobile/index',
    method: 'POST',
	data
  })
}
//获取地方名人
export function getfamouslist(data){
	return request({
	  url: '/api/mobile/getfamouslist',
	  method: 'POST',
		data
	})
}

//获取留言信息
export function getfeedbacklist(data){
	return request({
	  url: '/api/mobile/getfeedbacklist',
	  method: 'POST',
		data
	})
}

//登录
export function login(data){
	return request({
	  url: '/api/mobile/login',
	  method: 'POST',
		data
	})
}
//注册
export function register(data){
	return request({
	  url: '/api/mobile/register',
	  method: 'POST',
		data
	})
}
//个人中心
export function getmyinfo(data){
	return request({
	  url: '/api/mobile/getmyinfo',
	  method: 'POST',
		data
	})
}
//搜索
export function search(data){
	return request({
	  url: '/api/mobile/search',
	  method: 'POST',
		data
	})
}
//公元年
export function calendar(data){
	return request({
	  url: '/api/mobile/getcalendar',
	  method: 'POST',
		data
	})
}
//书籍详情
export function bookdetail(data){
	return request({
	  url: '/api/mobile/bookdetail',
	  method: 'POST',
		data
	})
}
//用户收藏与取消收藏
export function collection(data){
	return request({
	  url: '/api/mobile/collection',
	  method: 'POST',
		data
	})
}

//获取三级分类
export function getthreecategory(data){
	return request({
	  url: '/api/mobile/getthreecategory',
	  method: 'POST',
		data
	})
}

//获取分类
export function getcategory(data){
	return request({
	  url: '/api/mobile/getcategory',
	  method: 'POST',
		data
	})
}
//获取分类下面的图书
export function getcategorybooklist(data){
	return request({
	  url: '/api/mobile/getcategorybooklist',
	  method: 'POST',
		data
	})
}

//获取相关图片
export function getrelevantimglist(data){
	return request({
	  url: '/api/mobile/getrelevantimglist',
	  method: 'POST',
		data
	})
}
//获取相关视频
export function getrelevantvideolist(data){
	return request({
	  url: '/api/mobile/getrelevantvideolist',
	  method: 'POST',
		data
	})
}
//获取相关音频
export function getrelevantaudiolist(data){
	return request({
	  url: '/api/mobile/getrelevantaudiolist',
	  method: 'POST',
		data
	})
}
//获取名人详情
export function getrelevantdetail(data){
	return request({
	  url: '/api/mobile/getrelevantdetail',
	  method: 'POST',
		data
	})
}
//获取其它列表
export function otherlist(data){
	return request({
	  url: '/api/mobile/otherlist',
	  method: 'POST',
		data
	})
}
//获取其它详情
export function getotherdetail(data){
	return request({
	  url: '/api/mobile/getotherdetail',
	  method: 'POST',
		data
	})
}
//pdf阅读器-获取册数以及每册下的卷数
export function getbookcategorylist(data){
	return request({
	  url: '/api/mobile/getbookcategorylist',
	  method: 'POST',
		data
	})
}
//pdf阅读器-获取册数下面的图片
export function getbookimagelist(data){
	return request({
	  url: '/api/mobile/getbookimagelist',
	  method: 'POST',
		data
	})
}
//pdf阅读器-获取标注
export function getlabellist(data){
	return request({
	  url: '/api/mobile/getlabellist',
	  method: 'POST',
		data
	})
}
//保存标签
export function savelabel(data){
	return request({
	  url: '/api/mobile/savelabel',
	  method: 'POST',
		data
	})
}