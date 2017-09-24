// var api_base_url 	=	"http://mengruoyanyu.get.vip/teaching/zhubao/index.php/";
// var api_base_url 	=	"http://192.168.10.104/zhubao/index.php/";
var api_base_url 	=	"http://192.168.20.112/zhubao/index.php/";
var base_url 		=	"";

var api_url 		=	{
	login_url 		: 	api_base_url+"login/login.html",
	register_url	: 	api_base_url+"login/register.html",
	face_url 		: 	api_base_url+"user/saveuserface.html",
	userinfo_url	: 	api_base_url+"user/getUserInfo.html",
	saveuser_url	: 	api_base_url+"user/saveuserinfo.html",
	goodslist_url	: 	api_base_url+"goods/goodslist.html",
	goodsinfo_url 	: 	api_base_url+"goods/getGoodsInfo.html",
	addcar_url 		: 	api_base_url+"car/addcar.html",
	carlist_url 	: 	api_base_url+"car/getcarlist.html"
};


//指定路径
var html_url	=	{
	login_url		: base_url+"login.html",
	index_url		: base_url+"index.html",
	goodsinfo_url	: base_url+"product_info.html"
}


//表单验证核心函数
var _provite_check_input 	=	function (data_type, value) {
	//1.获取data_type
	var check_back		=	{
		status 	: 	true,
		msg 	: 	'验证通过'
	}

	if (data_type == null || data_type == "") {
		return check_back;
	}
	//2.将data_type转成以‘，’为分隔符 data_type_arr 
	var data_type_arr 	=	data_type.split(',');
	
	//3.循环  data_type_arr
	//4.将data_type_arr中的每个值以‘=’分隔，分隔成数组
	//5.以data_type_one[0]为验证的规则，data_type_one[1]为验证的临界值
	//6.将value值根据验证规则验证
	// 7.如果不用验证通过返回验证结果
	for(key in data_type_arr){
		var data_type_one 	=	data_type_arr[key].split('=');
		switch(data_type_one[0]){
			case 'require':
				check_back 	=	{
					status 	: 	(value==null||value=="")?false:true,
					msg		: 	"不可为空"
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
			case 'max':
				check_back 	=	{
					status 	: 	(value.length>parseInt(data_type_one[1]))?false:true,
					msg		: 	`不能大于${data_type_one[1]}个字符`
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
			case 'min':
				check_back 	=	{
					status 	: 	(value.length<parseInt(data_type_one[1]))?false:true,
					msg		: 	`不能小于${data_type_one[1]}个字符`
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
			case 'word':
				var reg 	=	/^[\w_]+$/g;
				check_back 	=	{
					status 	: 	reg.test(value)?true:false,
					msg		: 	`只能由数字字母下划线组成`
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
			case 'reg':
				console.log('reg');
				var reg 	=	new RegExp(data_type_one[1],'g');
				check_back 	=	{
					status 	: 	reg.test(value)?true:false,
					msg		: 	`不合法`
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
			case 'same':
				var cont_value 	=	$('input[name="'+data_type_one[1]+'"]').val();
				check_back 	=	{
					status 	: 	cont_value==value?true:false,
					msg		: 	`不一致`
				};
				if (!check_back.status) {
					return check_back;
				}
				break;
		}
	}
	return check_back;
}

//表单提交验证
var check_input_form 	=	function (form) {
	var input_list 	=	form.find('input');
	input_list.each(function(){
		var data_type 	=	$(this).attr('data-type');
		var value 		=	$(this).val();
		var tag 		=	$(this).attr('data-tag');
		var check_back 	=	_provite_check_input(data_type, value);
		if (!check_back.status) {
			console.log(check_back, $(this));
			layer.msg(tag+check_back.msg, {icon: 2});
			return false;
		}
	});
}

//blur事件验证
var check_input_event 	=	function () {
	$('input').blur(function () {
		var data_type 	=	$(this).attr('data-type');
		var value 		=	$(this).val();
		var tag 		=	$(this).attr('data-tag');
		var check_back 	=	_provite_check_input(data_type, value);
		if (!check_back.status) {
		 	layer.msg(tag+check_back.msg, {icon: 2});
		 	return;
		}

	})
}

//ajax访问url   data_type,
var _ajax 	=	function(type, url, data,callback) {
	var processData 	=	true;
	var contentType 	=	"application/x-www-form-urlencoded";
	// if (data_type == 2) {
	// 	processData 	=	false;
	// 	contentType		=	false;
	// }
	$.ajax({
		type 	: 	type,
		url 	: 	url,
		data 	: 	data,
		dataType: 	"json",
		cache 	: 	false,
		processData:processData,	//参数序列化
		contentType:contentType,	//数据结构
		success : 	function (data) {
			callback(data);
		}
	});
}

//通用ajax回调函数
var _ajax_callback 	=	function (data) {
	var errorcode 	=	data.errorcode;
	var msg 		=	data.msg;

	switch(errorcode){
		case "200":
			// layer.msg(msg, {icon: 1});
			return true;
			break;
		case "3000":
			location.href = web_url.login_url;
			return false;
			break;
		default:
			layer.msg(msg, {icon: 2});
			return false;
			break;
	}
}

//获取当前html文件名
var _getFileName  = function(url){
	if (url == "" || url == null) {
		url   = window.location.href;
	}
    url       = url.substr(url.lastIndexOf('/')+1);
    var last  = url.lastIndexOf('?');
    if (last != -1) {
      return url.substr(0,url.lastIndexOf('?'));
    }
    return url;
}

//获取指定参数
var _getRequest   = function(request_name) {
    var reg   = new RegExp(request_name+"=([0-9a-z]*)(&|$)");
    var url   = location.href;
    var request_value   = url.match(reg);
    return request_value != null ? request_value[1] : null;
};

//获取所有参数
var _getAllRequest  =   function(){
    var url     =   location.href;
    url         =   url.substr(url.lastIndexOf('?')+1);
    var arr     =   url.split('&');
    var request =   {};
    for(key in arr){
        var arr_one     =   arr[key].split('=');
        request[arr_one[0]]     =   arr_one[1];
    }

    return request;
}

//页面跳转
var base = {
	jumpPage:function(url){
		window.location.href = url;
	}
}

//点击跳转
$('body').on('touchstart','.a_click',function(){
	var url = $(this).attr('url');
	window.location.href	=	url;
})
$('body').on('click','.a_click',function(){
	var url = $(this).attr('url');
	window.location.href	=	url;
})
