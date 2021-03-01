

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
		
	})
}
// reviewsTextLimit()

let syncCarousel = () => {
	$(document).ready(function() {

		var sync1 = $("#sync1");
		var sync2 = $("#sync2");
		var slidesPerPage = 5; 
		var syncedSecondary = false;
	  
		sync1.owlCarousel({
		  items : 1,
		  slideSpeed : 2000,
		  nav: true,
		  autoplay: false,
		  dots: false,
		  loop: true,
		  responsiveRefreshRate : 200,
		  navText: ['',''],
		}).on('changed.owl.carousel', syncPosition);
	  
		sync2
		  .on('initialized.owl.carousel', function () {
			sync2.find(".owl-item").eq(0).addClass("current");
		  })
		  .owlCarousel({
		  items : slidesPerPage,
		  dots: true,
		  loop: true,
		  nav: false,
		  margin: 15,
		  smartSpeed: 200,
		  slideSpeed : 500,
		  slideBy: slidesPerPage, 
		  responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);
	  
		function syncPosition(el) {
		  var count = el.item.count-1;
		  var current = Math.round(el.item.index - (el.item.count/2) - .5);
		  
		  if(current < 0) {
			current = count;
		  }
		  if(current > count) {
			current = 0;
		  }
		  
		  //end block
	  
		  sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		  var onscreen = sync2.find('.owl-item.active').length - 1;
		  var start = sync2.find('.owl-item.active').first().index();
		  var end = sync2.find('.owl-item.active').last().index();
		  
		  if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		  }
		  if (current < start) {
			sync2.data('owl.carousel').to(current - onscreen, 100, true);
		  }
		}
		
		function syncPosition2(el) {
		  if(syncedSecondary) {
			var number = el.item.index;
			sync1.data('owl.carousel').to(number, 100, true);
		  }
		}
		
		sync2.on("click", ".owl-item", function(e){
		  e.preventDefault();
		  var number = $(this).index() + 1;
		  sync1.data('owl.carousel').to(number, 300, true);
		});
	});
}
syncCarousel()


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
	

	let displayMoreBtn = () => {
		let selectLists = document.getElementsByClassName('select__list')
		selectLists = [].slice.call(selectLists)

		selectLists.map(selectList => {
			if (selectList.children[0].children.length < 2) {
				selectList.children[0].classList.remove("full")
				selectList.children[0].children[0].style.marginBottom = "0"
				selectList.children[1].hidden = true
			}
		})
	}
	displayMoreBtn()
	
	$('.filter_more').click(function(){
		let text = $(this).text()
		$(this).toggleClass('full')
		$(this).prev().toggleClass('full')
		$(this).text(text == "Показать все" ? "Скрыть" : "Показать все")
	});

	$('.faq__head').click(function(){
		$(this).toggleClass('opened')
		$(this).next().slideToggle()
	});

	if(window.innerWidth <= 537) {
		$('.filter-mobile').click(function(){
			$('.filter__content').fadeToggle()
			$('.filter__choises_mobile').fadeToggle()
			$(this).toggleClass('opened')
		});
	}

    document.querySelectorAll('.input_number').forEach(function (el) {
		el.addEventListener('input', function () {
			this.value = this.value.replace(/[^\d]/g, '');
		});
	});

	let displayCheckedFilter = () => {
		var themes = []; 
		var list_checkbox = document.querySelectorAll('.checkbox'); 

		let choiseArr
		const output = document.getElementById("filter_res")
		
		list_checkbox = [].slice.call(list_checkbox);
	  
		list_checkbox.map((item) => {
		  item.onclick = () => {
			if (item.checked) {
			  themes.push(item.value)
			  choiseArr = themes.slice().join('; ')
			  output.innerHTML = '<div class="filter__item">' +  choiseArr + '</div>'
			  
			 
			} else if (!item.checked) {
			  themes.pop(item.value)
			  choiseArr = themes.slice().join('; ')
			  output.innerHTML = '<div class="filter__item">' +  choiseArr + '</div>'
			}
		  }
		})

		
		
		if(window.innerWidth <= 537) {
			const newC = ['button__blue', 'button__blue_arrow'],
				oldC = ['button__black', 'button__black_arrow']
			
			let button = document.getElementById('filter_submit')
			button.classList.add(...newC)
			button.classList.remove(...oldC)
		}
	}
	displayCheckedFilter()

	let likes = () => {
		let item = document.getElementById('likes')
		let clicks = 0

		item.onclick = function() {
			clicks += 1;
  			this.innerHTML = clicks;
		}
	}
	likes()

