

import '../scss/app.scss'

import jquery from './jquery'
import owl from './owl'
import mask from './mask'
import getData from './getData'

jquery()
owl()
mask()


    
let maskTel = () => {
	// $('input[type="tel"]').mask("+375 (99) 999 99 99");
}
maskTel()

if($('.hero-carousel').length) { 
	$('.hero-carousel').owlCarousel({
		loop:true,
		lazyLoad : true,
		// stagePadding: 300,
		margin:0,
		nav:false,
		smartSpeed: 700,
		autoplayTimeout:7000,
		autoplay: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			1024:{
				items:1
			}
		}
	});    		
}

if($('.products__slider').length) { 
	$('.products__slider').owlCarousel({
		loop:true,
		lazyLoad : true,
		// stagePadding: 300,
		margin: 30,
		nav: true,
		smartSpeed: 700,
		autoplayTimeout:7000,
		autoplay: false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:4
			}
		}
	});    		
}

if($('.reviews__slider').length) { 
	$('.reviews__slider').owlCarousel({
		loop:true,
		lazyLoad : true,
		// stagePadding: 300,
		margin: 30,
		nav: true,
		smartSpeed: 700,
		autoplayTimeout:7000,
		autoplay: false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1024:{
				items:2
			}
		}
	});    		
}

$('.contacts__city').click(function(){
	$(this).next().slideToggle()
	$(this).toggleClass('opened')
});

$('.location__head').click(function(){
	$(this).next().slideToggle()
	$(this).toggleClass('opened')
});

$('.sidebar__head').click(function(){
	$(this).next().slideToggle()
	$(this).toggleClass('opened')
});

if(window.innerWidth <= 537) {
	$('.footer__item.lg').click(function(){
		$(this).next().slideToggle()
		$(this).toggleClass('opened')
	});
}

$('.about__video_btn').click(function(){
    $('.modal-about').fadeIn()
});

$('.modal-about__close').click(function(){
    $('.modal-about').fadeOut()
});

let currentYear = () => {
    let today = new Date();
    let year = today.getFullYear();
    document.getElementById("yearVal").innerHTML = year
}
currentYear()

let reviewsTextLimit = () => {
	let text = document.getElementsByClassName('reviews__text'),
	btns = $('.reviews__more')

	text = [].slice.call(text)
	btns = [].slice.call(btns)
	text.map(item => {
		item.innerText = item.innerText.slice(0,270) + '...'
		
		// btns.map(btn => {
		// 	btn.onclick = () => {
		// 		item.innerText = item.innerText.slice(0,280)
		// 	}
		// })
	})
}
// reviewsTextLimit()


var selectComponent = function selectComponent() {
	jQuery(function ($) {
	  $('.select').on('click', '.select__head', function () {
		if ($(this).hasClass('open')) {
		  $(this).removeClass('open');
		  $(this).next().fadeOut();
		} else {
		  $('.select__head').removeClass('open');
		  $('.select__list').fadeOut();
		  $(this).addClass('open');
		  $(this).next().fadeIn();
		}
	  });
	  $('.select').on('click', '.select__item', function () {
		$('.select__head').removeClass('open');
		$(this).parent().fadeOut();
		$(this).parent().prev().text($(this).text());
		$(this).parent().prev().prev().val($(this).data("value"));
	  });
	  $('.select').on('click', '.select__value', function () {
		var _this = this;
  
		var data = function data() {
		  $(_this).parent().prev().text($(_this).val());
		  $(_this).parent().prev().prev().val($(_this).val());
		};
  
		$('.apply-btn').click(function () {
		  data();
		});
	  });
	  $('.select').on('input', '.select__value', function () {
		$(this).parent().prev().text($(this).val());
		$(this).parent().prev().prev().val($(this).val());
	  });
	  $(document).click(function (e) {
		if (!$(e.target).closest('.select').length) {
		  $('.select__head').removeClass('open');
		  $('.select__list').fadeOut();
		}
	  });
	});
  };
  
  selectComponent();
  
  $('.nav-mobile__button').click(function(){
    $('.nav-mobile__menu').fadeIn();
  });
  $('.nav-mobile__close').click(function(){
    $('.nav-mobile__menu').fadeOut();
  });

  
	let nav = () => {
	    
	    let navItem = document.getElementsByClassName('nav__link')
	    let mobileWrap = document.getElementById('nav-mobile_menu')
	    let navArr = [].slice.call(navItem)
	    let mobileNav = navArr.map((nav) => {
	        let id = nav.href
	        
	        return '<a class="nav-mobile__menu_item" href="' + id + '">' + nav.innerText + '</a>'
	    })
	    
	    mobileWrap.innerHTML = mobileNav.join(' ')
	}
	
	nav()
	
	
	$('.filter_more').click(function(){
		let text = $(this).text()
		$(this).toggleClass('full')
		$('.filter__items').toggleClass('full')
		$(this).text(text == "Показать все" ? "Скрыть" : "Показать все")
	  });

    