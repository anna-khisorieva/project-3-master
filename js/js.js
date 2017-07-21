//Плавное меню прокрутки
 $(document).ready(function() {
 	$(".horizontal-nav a").mPageScroll2id({
 		scrollSpeed: 500
 	});

 	$(".facts").waypoint(function() {
 	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$(".facts-numbers span").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		numberStep: comma_separator_number_step},
		1400);
	});	
 	}, {
 		offset: '85%'	
 	});
 });

//Кнопка вверх
 $(window).scroll(function(){
 	if ($(this).scrollTop() > 800) {
 		$('.btn_up').fadeIn();
 	} else {
 		$('.btn_up').fadeOut();
 	}
 });

  $('.btn_up').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
    });

//Липкая шапка

//Options
var options = {
  offset: 400
}

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.site-nav', options);

//Кнопка для раскрытия меню
$(".main-menu__btn").click(function() {
	$(".main-menu__btn").toggleClass("active")
});

$(".horizontal-nav li a").click(function() {
	if (window.matchMedia("(max-width: 1200px)").matches) {
		$(".horizontal-nav").fadeOut(600);
		$(".main-menu__btn").toggleClass("active");
	}
});

$(window).resize(function() {
		if ( $(this).width() > 992 ) {
			$(".horizontal-nav").fadeIn();
		}
	});

$(".main-menu__btn").click(function() {
	$(this).next(".horizontal-nav").slideToggle();

	$(window).resize(function() {
		if ( $(window).width() > 992 ) {
			$(".horizontal-nav").removeAttr('style');
		}
	});
	
});

//Кнопка поиска открывающаяся при клике
$("i.ic-search").click(function() {
	$(".search-popup").show();
});
$(".close-search").click(function() {
	$(".search-popup").hide();
});


$(document).ready(function() {
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".work-photo",
			itemSelector: ".work-photo"
	});
});
});

$(".nano").nanoScroller();
$('.collapse').on('shown.bs.collapse', function () {
  $(".nano").nanoScroller();
});

$('.wrap-slider').slick({
	arrows: true,
	dots: false,
	nextArrow: '<i class="fa fa-angle-right"></i>',
    prevArrow: '<i class="fa fa-angle-left"></i>'
});
