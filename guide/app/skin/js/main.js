;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	
	var fullHeight = function() {

		if( $(window).width() >= 748)
		{
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
		else
		{
			$('.js-fullheight').css('height', 220);
			$(window).resize(function(){
				$('.js-fullheight').css('height', 220);
			});
		}

	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    }
		});

	};



	var offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');
		$('#fh5co-offcanvas').append($('#fh5co-header .nav').clone());
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');    
	
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};



	var mobileClickMenu = function() {

		if(isMobile.any() ) {
			$('#fh5co-offcanvas .nav li a').live("click",function(){
			if( $(this).next().is('ul') ){
			 $(this).next('ul').css('display','none');
			 if( $(this).next('ul').css('display') == 'none' ){
			  $(this).next('ul').show();
			 
			  $(this).find('span').removeClass("downward"); 
			  $(this).find('span').addClass("upward"); 
			  return false;    
			 }else{
			  $(this).next('ul').hide();
			  $(this).next('ul').find('ul').slideUp();
			  $(this).find('i').attr("class","touch-arrow-down");
			  $(this).find('span').removeClass("upward"); 
			  $(this).find('span').addClass("downward"); 
			  return false;    
			 }   
			}
			
		   });
		}

	};

    // Document on load.
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		mobileClickMenu();
		if ( !isMobile.any() ) {
		   //内容加载后的运动效果
	      dataAnimate();	
		}
		
		 fullHeight();
	});


}());

/*百度分享*/
 window._bd_share_config={
		   "common":{"bdSnsKey":{},
		   "bdText":"",
		   "bdMini":"2",
		   "bdMiniList":false,
		   "bdPic":"",
		   "bdStyle":"0",
		   "bdSize":"32"},
		   "share":{}
		   };
		  with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];

jQuery(document).ready(function(){

 /*置顶*/
	 var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
        .text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
            $("html, body").animate({ scrollTop: 0 }, 120);
     }), $backToTopFun = function() {
        var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0)? $backToTopEle.show(): $backToTopEle.hide();    
        //IE6下的定位
        if (!window.XMLHttpRequest) {
            $backToTopEle.css("top", st + winh - 166);    
        }
     };
     $(window).bind("scroll", $backToTopFun);
    $(function() { $backToTopFun(); });
	
	 /*置顶*/
	 
	  /*微信图片显示*/
     $('#f-weixin-id').mouseenter(function(){
		   $(this).find('.weixint-content').removeClass("hidden").addClass('animated-fast bounceIn');

		}).mouseleave(function(){
			$(this).find('.weixint-content').addClass("hidden").removeClass('animated-fast bounceIn');
	});
})


//获取浏览量
function showNum(cid,ctype,cshow,showid){
	$.get('/config/count.asp',{id:cid,stype:ctype,show:cshow},function(data){
		$(showid).html(data);
	});
}
