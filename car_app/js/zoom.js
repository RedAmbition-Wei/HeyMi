$(document).ready(
	function(){
		function zoom() {
				var zoom = $(window).width() / 750;
				console.log($(window).width());
				$("body").css("zoom", zoom).show();
			}
			zoom();
			window.onresize = zoom;
			
	}
)