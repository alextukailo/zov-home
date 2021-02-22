

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
		autoplayTimeout:5000,
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

    