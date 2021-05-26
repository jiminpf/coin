$(document).ready(function(){
	//scrolla
//	$(".animated").scrolla({
//		once: true,
//		mobile: false,
//	});
	//gnb
	/*gnbFn();
	function gnbFn(){
		var gnb = $(".gnb");
		gnb.on("mouseenter",function(){
			$(".gnb_sub, .gnb_sub_bg").stop().slideDown();
		});
		gnb.on("mouseleave", function(){
			$(".gnb_sub, .gnb_sub_bg").stop().slideUp();
		});
	}*/
	// 2depth menu
	$(".menu_list .depth1").click(function () {
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(".menu_list .depth2").stop().slideUp(500);
		} else {
			$(".menu_list .depth1").removeClass("on")
			$(".menu_list .depth2").stop().slideUp(500);
			$(this).addClass("on").next(".depth2").stop().slideDown(500);
		}
	});
	//mobile gnb
	mGnbFn()
	function mGnbFn(){
		var gnbBtn = $(".header .m_menu, .m_gnb .close");
		gnbBtn.on("click", function(){
			mGnbOnOff();
		})
		$(".m_gnb_wrap").on("click", function(e){
			if(e.target == this){
				mGnbOnOff();
			}
		});
		function mGnbOnOff(){
			if(gnbBtn.hasClass("on")){
				gnbBtn.removeClass("on");
				$(".m_gnb").stop().animate({
					right:-310,
				}, function(){
					$(".m_gnb_wrap").css("display","none");
				})
			} else {
				gnbBtn.addClass("on");
				$(".m_gnb_wrap").css("display","block");
				$(".m_gnb").stop().animate({
					right:0,
				});
			}
		}
		$(".m_gnb_list > li").on("click", function(){
			if($(this).children("a").hasClass("current")){
				$(".m_gnb_sub").stop().slideUp();
				$(this).children("a").removeClass("current");
			} else {
				$(".m_gnb_list > li > a").removeClass("current");
				$(this).children("a").addClass("current");
				$(".m_gnb_sub").stop().slideUp();
				$(this).find(".m_gnb_sub").stop().slideDown();
			}
		});
	}
	$(window).on("scroll", function(){
		toTopBtn();
	})

	function toTopBtn(){
		var winT = $(window).scrollTop();
		if(winT <= 100){
			$(".btn_to_top").css("display", "none");
		}else{
			$(".btn_to_top").css("display", "block");
		}
		$(".btn_to_top").on("click", function(){
			$("html, body").stop().animate({
				scrollTop:0
			})
		})
	}

	// 수수료 팝업
	$('.fees .line').click(function(){
		$('.fees_modal').fadeIn();
	});
	$('.fees .close').click(function(){
		$('.fees_modal').fadeOut();
	})

	// 아이디찾기 아코디언메뉴
	$('.accordion li a').click(function(){ 
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).next().slideUp();
		}else{
			$('.accordion a').removeClass();
			$('.accordion .ac_box').slideUp();
			$(this).addClass('active');
			$(this).next().slideDown();
		}
	})
	//파일선택
	var uploadFile = $('.fileBox .uploadBtn');
	uploadFile.on('change', function(){
		if(window.FileReader){
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).siblings('.fileName').val(filename);
	});

	//대행현황 입력하기 팝업
	$('.enter_btn').click(function(){
		$('.txid_modal').fadeIn();
	})
	$('.txid_modal .close').click(function(){
		$('.txid_modal').fadeOut();
	})
})


function number_format(data) {

	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;
	data = data+'';

	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i=0; i<data.length; i++) {
		number = number + data.charAt(i);

		if (i < data.length - 1)
		{
			k++;
			if ((k % cutlen) == 0)
			{
				number = number + comma;
				k = 0;
			}
		}
	}

	return number;
}

// , 를 없앤다.
function no_comma(data)
{
	var tmp = '';
	var comma = ',';
	var i;

	data = data+'';

	for (i=0; i<data.length; i++)
	{
		if (data.charAt(i) != comma)
			tmp += data.charAt(i);
	}
	return tmp;
}
// 쿠키 입력
function set_cookie(name, value, expirehours, domain)
{
	var today = new Date();
	today.setTime(today.getTime() + (60*60*1000*expirehours));
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
	if (domain) {
		document.cookie += "domain=" + domain + ";";
	}
}

// 쿠키 얻음
function get_cookie(name)
{
	var find_sw = false;
	var start, end;
	var i = 0;

	for (i=0; i<= document.cookie.length; i++)
	{
		start = i;
		end = start + name.length;

		if(document.cookie.substring(start, end) == name)
		{
			find_sw = true
			break
		}
	}

	if (find_sw == true)
	{
		start = end + 1;
		end = document.cookie.indexOf(";", start);

		if(end < start)
			end = document.cookie.length;

		return document.cookie.substring(start, end);
	}
	return "";
}

// 쿠키 지움
function delete_cookie(name)
{
	var today = new Date();

	today.setTime(today.getTime() - 1);
	var value = get_cookie(name);
	if(value != "")
		document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}
$(document).ready(function(){
	//scrolla 불러들이기
//	$('.animate').scrolla();
});

function onlyNumber(v){
	var regexp = /^[0-9]*$/;
	var ck_txt = v.val();
	
	if(!regexp.test(ck_txt)){
		v.val('0');
	}
}
