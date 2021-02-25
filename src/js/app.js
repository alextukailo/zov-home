

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


// $('.nav_mobile').click(function(e){
//     e.preventDefault();
//     $(this).toggleClass('open');
//     $('.nav_mobilelist').slideToggle();
//   });
  
//   $('#nav_mobile').click(function(){
//     $('.nav_mobile').toggleClass('open');
//     $('.nav_mobilelist').slideToggle();
//   });

  
// 	let nav = () => {
	    
// 	    let navItem = document.getElementsByClassName('nav__item')
// 	    let mobileWrap = document.getElementById('nav_mobile')
// 	    let navArr = Array.from(navItem)
// 	    let mobileNav = navArr.map((nav) => {
// 	        let id = nav.children[0].href
	        
// 	        return '<a class="nav_mobile-menu-item" href="' + id + '">' + nav.innerText + '</a>'
// 	    })
	    
// 	    mobileWrap.innerHTML = mobileNav.join(' ')
// 	}
	
//     nav()

    