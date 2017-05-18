$(function(){
	//导航
	$(".nav-list li").hover(function(){
		$(this).find(".nav-item").addClass("bg-green");
		$(this).find(".nav-sublist").show();
	},function(){
		$(this).find(".nav-item").removeClass("bg-green");
		$(this).find(".nav-sublist").hide();
	})
	//轮播
	var s_t,
		s_i=1,
		s_w=$(window).width(),
		s_n=$(".slider-list li").length;
	$(".slider-list li").width(s_w);
	$(".slider-list").width(s_w*s_n);
	$(".slider-point span").hover(function(){
		var cur_i=$(this).index();
			s_i = cur_i;
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".slider-list").animate({"left":-s_w*s_i},500);
	})
	$(".slider").hover(function(){
		clearInterval(s_t);
	},function(){
		s_t = setInterval(function(){
			$(".slider-list").animate({"left":-s_w*s_i},800);
			$(".slider-point span").eq(s_i).addClass("cur").siblings().removeClass("cur");
			s_i++;
			if(s_i==s_n){			
				s_i = 0;
			}
		},3000)
	}).trigger("mouseleave");
	//新闻tab
	$(".mod-hd span").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(".mod-bd").eq($(".mod-hd span").index(this)).show().siblings(".mod-bd").hide();
	})
})