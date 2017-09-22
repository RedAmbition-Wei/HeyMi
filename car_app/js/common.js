//公共方法
var base = {
//	参数部分
    cartoken:function(){
    	return this.cookie('cartoken');
    },
	jumpPage: function(url){
		window.location.href = url;
	},
	baseurl:'http://mengruoyanyu.get.vip/168car/api.php/',//公共的url
	commonAjax:function(thisurl,thisdata,funcName){//引用ajax的方法
		$.ajax({
			url:this.baseurl+thisurl,//获取数据的url
			dateType:'json',//参数返回的类型
			type:'GET',//参数传送的方式
			data:thisdata,//
			success:function(data){//请求成功后的回调函数
				if(typeof(eval(funcName))=='function'){
					eval(funcName)(data);
					return true;
				}
			}
		})
	},
	formAjax:function(thisurl,thisdata,obj){
		$.ajax({
			url:this.baseurl+thisurl,//获取数据的url
			dateType:'json',//参数返回的类型
			type:'post',//参数传送的方式
			data:thisdata,//
			xhr: function(){ //获取ajaxSettings中的xhr对象，为它的upload属性绑定progress事件的处理函数 
				myXhr = $.ajaxSettings.xhr(); 
				if(myXhr.upload){ //检查upload属性是否存在 
					//绑定progress事件的回调函数
					var progress = obj.parents('.pot').find('progress');
					console.log(progress)
					myXhr.upload.addEventListener(progress,this.progressHandlingFunction, false);
				} 
				return myXhr; //xhr对象返回给jQuery使用 
			}, 
			contentType:false,
			processData:false,
			success:function(data){//请求成功后的回调函数
				if(typeof(eval(funcName))=='function'){
					eval(funcName)(data);
					return true;
				}
			}
		})
	},
	GetQueryString:function(name){
		var reg= new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
		var r=window.location.search.substr(1).match(reg);
		if(r!=null)return unescape(r[2]);return null;
	},
	cookie:function(name, value, options){
	    if (typeof value != 'undefined') { // name and value given, set cookie
	        options = options || {};
	        if (value === null) {
	            value = '';
	            options.expires = -1;
	        }
	        var expires = '';
	        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
	            var date;
	            if (typeof options.expires == 'number') {
	                date = new Date();
	                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
	            } else {
	                date = options.expires;
	            }
	            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
	        }
	        var path = options.path ? '; path=' + options.path : '';
	        var domain = options.domain ? '; domain=' + options.domain : '';
	        var secure = options.secure ? '; secure' : '';
	        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	    } else { // only name given, get cookie
	        var cookieValue = null;
	        if (document.cookie && document.cookie != '') {
	            var cookies = document.cookie.split(';');
	            for (var i = 0; i < cookies.length; i++) {
	                var cookie = jQuery.trim(cookies[i]);
	                // Does this cookie string begin with the name we want?
	                if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                    break;
	                }
	            }
	        }
	        return cookieValue;
	    }
	},
	brand_id:function () {
		return this.GetQueryString('brand_id');
    },
};




var sign = {
	del : function(obj){
		obj.parents('.pot').remove();
	},
	getimg:function (obj) {
        obj.parents('.pot').find('input').click();
    },
	showimg:function (img,obj) {
		var img = img.files[0];
		var size = img.size;
        var url = window.URL.createObjectURL(img);
        var formdata = new FormData(obj.parents('.formdata')[0]);
        base.formAjax('player/enroll.html',formdata,obj);
        obj.parents('.pot').find('img').attr('src',url);

        
        this.addjia();
    },
	addjia:function () {
        if ($('.pot').length >= 12) {
        } else {
            var str = '<div class="pot"><img class="picture" onclick="sign.getimg($(this))" src="img/addimg.png"/>'
                + '<form style="display: none;" action="" enctype="multipart/form-data" method="post" class="formdata">'
                + '<input name="token" type="hidden" value="'+base.cartoken()+'"/>'
                + '<input name="face" class="face" type="file" onchange="sign.showimg(this,$(this))"/></form>';
            $('.pc').append(str);
            
        }
    }
}



var xiugai = function(){
	var formdata = new FormData($('.formdata')[0]);
	base.formAjax('php/player/enroll.html',formdata,'lll');
};
var lll = function(data){
		console.log(data);
		alert(data.msg);
		if(data.errorcode == 200){
			$('.picture').attr('src',data.data.face);
		}
		$('img').attr('src',data.data.face);
};

//搜索框
var search = {
	car : function(){
		this.searchcarlist($('#searchval').val());
	},
	searchcarlist : function(){
		base.commonAjax('','','');
	}
};



var Jump = {
	jump:(function(){
		$('#footer').load('gonggong_footre.html');
	})
}



var database = {
	base:(function(){
		$('.nav>li').click(function(){
				var $this = $(this).index();
				var oP =$('.block>p').eq(0).outerHeight();
				var oP1 =$('body>p').eq(1).outerHeight();
				var oLi = $('.block').eq($this-1).children('li');
				var g = oLi.length;
				var height = oLi.outerHeight();
				if($this==0){
					$('body').scrollTop(0);
				}else{
					$('body').scrollTop(g*height+oP1);
				}
			})
	})
}


var deg = {
	xq:(function(){
		$('.title_con').eq(0).children('li').css('color','#ff0000');
		$('.title_con').eq(1).children('li').css('color','#ff0000');
		$('.title_cont').eq(0).children('li').css('color','#ff0000');
		$('.con').eq(0).children('li').css('color','#ff0000');
		$('.con').eq(1).children('li').css('color','#ff0000');
		$('.con').eq(2).children('li').css('color','#ff0000');
		$('.cont').eq(0).children('li').css('color','#ff0000');
		$('.cont').eq(1).children('li').css('color','#ff0000');
		$('.cont').eq(2).children('li').css('color','#ff0000');
	})
}


var kuaibao = {
	kuai:(function(){
		$('.new').click(function(){
				$('.box').css('display','block');
				$('.box_dong').css('display','none');
				$('.box_deg').css('display','none');
			})
			$('.dong').click(function(){
				$('.box_dong').css('display','block');
				$('.box').css('display','none');
				$('.box_deg').css('display','none');
			})
			$('.deg').click(function(){
				$('.box_deg').css('display','block');
				$('.box').css('display','none');
				$('.box_dong').css('display','none');
			})
			$('.tit').click(function(){
				var $index = $(this).index();
				$('.tit').eq($index).css({'background':'#1fbfcb','border-bottom':'2px solid #0a5055','color':'#fff'});
				$('.tit').eq($index).siblings().css({'background':'#fff','border':'none','color':'#0a5055'});
			})
	})
}




var  rel = {
	release:(function(){
		$(document).ready(function(){
		$('.release-header ul li').click(function(){
			var index = $(this).index();
			$(this).addClass('click-show').siblings().removeClass('click-show');
		});
})
	})
}

var footered = {
	downed:(function(){
		var page = $('body').attr('page');
		$('.footer-div').eq(page).css({'background':'#1FBFCB','color':'#fff'});
	})
};
var brand = {
	carversion_information : function(data){
		console.log(data);
		if(data.errorcode==200){
			var html='';
			for(var i=0,j=data.data.length;i<j;i++){
				html +=`<div>
							<p>${data.data[i].initial}</p>
							<li onclick="base.jumpPage('motorcycle.html?brand_id=${data.data[i].brand_id}')">${data.data[i].brand_name}<span>10条</span></li>
						<div/>`
			}
		}
		$('.brand').html(html);
		$('.issue_brand_brand').html(html);
	}
};
var issue = {
	carversion_information : function(data){
		console.log(data);
		if(data.errorcode==200){
			var html='';
			for(var i=0,j=data.data.length;i<j;i++){
				html +=`<div>
							<p>${data.data[i].initial}</p>
							<li>${data.data[i].brand_name}<span>10条</span></li>
						<div/>`
			}
		}
		$('.information_tab').html(html);
		$('.issue_information_tab').html(html);
	}
};
var brands = {
	carversion_information : function(data){
		console.log(data);
		if(data.errorcode==200){
			var html='';
			for(var i=0,j=data.data.length;i<j;i++){
				html+=`<div>
							<p>${data.data[i].initial}</p>
							<li onclick="base.jumpPage('issue_motorcycle.html?brand_id=${data.data[i].brand_id}')">${data.data[i].brand_name}<span>10条</span></li>
						</div>`
			}
		}
		$('.issue_brand_brand').html(html);
	}
};
var mtorcycle={
	carversion_mtorcycle:function(data){
		console.log(data);
		if(data.errorcode==200){
			var html='';
			for(var l=0,j=data.data.length;l<j;l++){
				html+=`
					<h3>${data.data[l].group}</h3>
					<p onclick="jumpPage('issue_motorcycle_information.html?version_id=${data.data[l].version_id}')">${data.data[l].version_name}</p>`
			}
		}
		$('div').html(html);
	}
};
//var motorcycle_information={
//	cartype_issue:function(data){
//		console.log(data);
//		if(data.errorcode==200){
//			var html='';
//			for(var a=0,j=data.data.length;a<j;a++){
//				html+=`<p onclick="jumpPage('issue_screen.html?type_id=${data.data[a].type_id}')">卡宴基本</p>`
//			}
//		}
//		$('div').html(html);
//	}
//		}
//	}
//}
