$(document).ready(function(){
	// 扩展名
	$.fn.shop		=	function(){
		//首页轮播图
		var index_swiper	=	function(){
			var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,    
		    // effect:'flip',翻页式旋转
		   	autoplay:3000,
		    // 如果需要分页器
		    pagination: '.swiper-pagination'
		  	})
		};

		//点击事件
		$('.f_flex>div').click(function(){
			var index = $(this).index();
			$(this).addClass('b_color').siblings().removeClass('b_color');
		});

		//接数据：获取商品列表
		var page	=	0;
		var getGoodsList	=	function(){
			var data	=	{page:page+1};
			_ajax('post',api_url.goodslist_url,data,function(data){
				if(_ajax_callback(data)){
					var str 	=	"";
					var goods_list 	=	data.data;
					for(key in goods_list){
						str 	+= '<div class="a_click" url="'+html_url.goodsinfo_url+'?goods_id='+goods_list[key].goods_id+'">'+
										'<div class="last_img2">'+
											'<img src="'+goods_list[key].show_pic+'" alt="">'+
										'</div>'+
										'<div class="nav_div">'+
											'<span>¥</span>'+
											'<strong>'+goods_list[key].goods_price+'</strong>'+
											'<em>336人付款</em>'+
											'<p>'+goods_list[key].goods_name+'</p>'+
											'<i></i>'+
											'<i></i>'+
											'<a href=""></a>'+
										'</div>'+
									'</div>';
					}
					$('.nav_details').append(str);

				}
				
			})
		}

		//接数据：获取商品详情
		var getGoodsInfo	=	function(){
			var goods_id	=	_getRequest('goods_id');
			var data	=	{goods_id:goods_id};
			_ajax('post',api_url.goodsinfo_url,data,function(data){
				if(_ajax_callback(data)){
					var str_info 	=	"";
					var goods_info 	=	data.data;
						str_info 	+= 	'<div class="swiper-slide">'+
								        	'<img src="'+goods_info.show_pic+'">'+
								        '</div>'+
								        '<div class="swiper-slide">'+
								        	'<img src="'+goods_info.show_pic+'">'+
								        '</div>'+
								        '<div class="swiper-slide">'+
								        	'<img src="'+goods_info.show_pic+'">'+
								        '</div>';
					$('.swiper-wrapper').append(str_info);
						str_info 	+= 	'<img src="'+goods_info.show_pic+'"/>';
					$('.js_img').append(str_info);
					index_swiper();
					var goods_name 	=	"";
					goods_name		+=	'<a href="">'+goods_info.goods_name+'</a>';
					$('.pro_div').append(goods_name);
					var goods_price 	=	"";
					goods_price		+=	'<em>'+goods_info.goods_price+'</em>';
					$('.em').append(goods_price);					
				}
				
			})

		}

		//商品详情切换效果
		$('.change_list').bind({
			// 移动端触摸事件
			touchstart	:function(){
				// if($('.nav_details').hasClass('list_2')){
				// 	$('.nav_details').removeClass('list_2');
				// 	$('.nav_details').addClass('list_1');
				// }else{
				// 	$('.nav_details').removeClass('list_1');
				// 	$('.nav_details').addClass('list_2');
				// }
				//简便写法
				$('.nav_details').toggleClass('list_2');
				$('.nav_details').toggleClass('list_1');
			}
		});


		//点击加边框
		$('.nav_details>div,.sale>li').click(function(){
			var index = $(this).index();
			$(this).addClass('border_color').siblings().removeClass('border_color');
		});


		// 百度地图API功能
		var baidu_map	=	function(){

			// var map = new BMap.Map("allmap");    // 创建Map实例
			// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
			// map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
			// map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
			// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		

		// 百度地图API功能
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(116.331398,39.897445);
		map.centerAndZoom(point,12);

		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				// alert('您的位置：'+r.point.lng+','+r.point.lat);
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})

		map.centerAndZoom(new BMap.Point(117.155, 39.118), 11);
		var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
		walking.search("赛德广场", "滨江道");

	}

		//注册登录：点击注册
		$('.submit-register').bind({
			touchstart: function(){
				var oForm	=	$('form');
				check_input_form(oForm);
					//接数据：
					var login_name		=	$('input[name="login_name"]').val();
					var password		=	$('input[name="password"]').val();
					var repassword		=	$('input[name="repassword"]').val();
					var email		=	$('input[name="email"]').val();

					var  data	=	{login_name:login_name, password:repassword};

					_ajax('post', api_url.register_url, data, function(data){
						if (_ajax_callback(data)) {
							window.location.href	=	html_url.login_url;
						}
					});
			}
		})

		//注册登录：点击登录
		$('.submit-login').bind({
			touchstart: function(){
				var oForm	=	$('form');
				check_input_form(oForm);
					//接数据：登录
					var login_name		=	$('input[name="login_name"]').val();
					var password		=	$('input[name="password"]').val();
					var repassword		=	$('input[name="repassword"]').val();
					var email		=	$('input[name="email"]').val();

					var  data	=	{login_name:login_name, password:password};

					_ajax('post',api_url.login_url,data,function(data){
						if(_ajax_callback(data)){
							window.localStorage.setItem('zb_token', data.data.token);
							window.localStorage.setItem('zb_user_id', data.data.user_id);
							window.localStorage.setItem('zb_nick_name', data.data.nick_name);
							window.localStorage.setItem('zb_face', data.data.face);
							window.location.href	=	html_url.index_url;
						}
						
					});
			}
		})

		//加载页面公共头尾
		var load_public		=	function(){
			$('.flex').load('./public/header.html');
			$('.f_flex').load('./public/footer.html');
		}

		//验证登陆
		var check_login		=	function(){
			var tonken	=	window.localStorage.getItem('zb_token');
			if(tonken == null || tonken == ""){
				window.location.href = html_url.login_url;
				return;
			}
		}	

		//个人中心绑定数据
		var personal_init	 = 	function(){
			var face 		 =	window.localStorage.getItem('zb_face');
			var nick_name 	 =	window.localStorage.getItem('zb_nick_name');
			if(face !="" && face != null){
				$('.photo>div:eq(0)>img').attr('src', face)
			}
			if(nick_name !="" && nick_name != null){
				$('.user-info>div:eq(1)').html(nick_name);
			}
		}

		//跳转个人中心
		$('.photo').bind({
			click 	: 	function(){window.location.href	=	"personal_li.html";},
			touchstart 	: 	function(){window.location.href	=	"personal_li.html";}
		})

		//点击更换头像
		$('.click_img').click(function(){
			$('.input_').click();
			$('.input_').change(function(){
				var tonken	=	window.location.getItem('zb_token');
				var data	=	new FormData($("#"+id)[0]);	
							
				data.append('token', token);

				_ajax('post', api_url.face_url, data, 2, function(data){
					if (_ajax_callback(data)) {
						window.localStorage.setItem('zb_face', data.data.face);
						location.reload();
					}
				})
			})	
		});

		//获取个人信息
		var getUserInfo 	=	function(){
			var token 	=	window.localStorage.getItem('zb_token');
			var data 	=	{token:token};
			_ajax('get', api_url.userinfo_url, data, 1, function(data){
				$('.user-face').attr('src', data.data.face);
				$('.nick-name').html(data.data.nick_name);
				$('.login-name').html(data.data.login_name);
				$('.sex').html(data.data.sex);
			})
		}

		// 初始化方法
		var _init	=	function(){
			var file_name	=	_getFileName();//获取文件名字
			load_public();//加载公共头尾
			switch(file_name){ 
				case '':
					index_swiper();	
					break;
				case 'index.html':
					index_swiper();
					break;
				case 'baidu_map.html':
					baidu_map();
					break;
				case 'list.html':
					getGoodsList();
					break;
				case 'product_info.html':
					getGoodsInfo();
					break;
				case 'register.html':
					check_input_event();
					break;
				case 'login.html':
					break;
				case 'personal.html':
					check_login();
					break;
				case 'personal_li.html':
					getUserInfo();
					check_login();
					break;

			}
		}

		_init();
	};
	$('body').shop();
})