

import '../scss/app.scss'

import jquery from './jquery'
import owl from './owl'
// import mask from './mask'
import validate from './validate'
import getData from './getData'

jquery()
owl()
// mask()
validate()


    
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

  var selectCustomComponent = function selectCustomComponent () {
		
	jQuery(function ($) {
		$('.select_form').on('click', '.select_head', function () {
		  if ($(this).hasClass('open')) {
			$(this).removeClass('open');
			$(this).next().fadeOut();
		  } else {
			$('.select_head').removeClass('open');
			$('.select__items').fadeOut();
			$(this).addClass('open');
			$(this).next().fadeIn();
		  }
		});
		$('.select_form').on('click', '.salon_item', function () {
		  $('.select_head').removeClass('open');
		  $(this).parent().fadeOut();
		  $(this).parent().prev().text($(this).text());
		  $(this).parent().prev().prev().val($(this).text());
		});
	  
		
		$('.select_form').on('input', '.select__value', function () {
		  $(this).parent().prev().text($(this).val());
		  $(this).parent().prev().prev().val($(this).text());
		});

		$(document).click(function (e) {
			if (!$(e.target).closest('.select_form').length) {
			  $('.select_head').removeClass('open');
			  $('.select__items').fadeOut();
			}
		  });
	  });
	
  }
  selectCustomComponent()
  
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
				if(typeof(selectList.children[0].children[0]) != "undefined" && selectList.children[0].children[0] !== null) {
					selectList.children[0].children[0].style.marginBottom = "0"
				}
				
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
			if(typeof(button) != "undefined" && button !== null) {
				button.classList.add(...newC)
				button.classList.remove(...oldC)
			}
		}
	}
	displayCheckedFilter()

	let likes = () => {
		let item = document.getElementById('likes')
		let clicks = 0

		if(typeof(item) != "undefined" && item !== null) {
			item.onclick = function() {
				clicks += 1;
				  this.innerHTML = clicks;
			}
		}
		
	}
	likes()


	let fileOutput = document.getElementById('fileOutput')
	function validateFile() {
		
        
        // const allowedExtensions =  ['jpg','png','svg'],
        const allowedExtensions =  [],
            sizeLimit = 10000000; 
            let files = [].slice.call(this.files)

        const { name:fileName, size:fileSize } = this.files[0];

        const fileExtension = fileName.split(".").pop();

        if(!allowedExtensions.includes(fileExtension)){
            let filesList = files.map(file => {
                const fileType = file.name.split(".").pop();
               return '<div><span class="badge mr-1 badge-danger">' + fileType + '</span><span id="fileNameOutput">' + file.name + '</span></div>'
            })

            fileOutput.innerHTML = filesList.join(' ')
            
        } else if(fileSize > sizeLimit){
            // this.value = null;
        }
    }
	if(typeof(fileOutput) != "undefined" && fileOutput !== null) {
		document.getElementById("fileUpload").addEventListener("change", validateFile)
	}

   let compactContactsNavItems = () => {
	   	const wrap = document.getElementById('nav-contacts') 
		let items = document.getElementsByClassName('nav-contacts__item')

		if(items.length >= 9 && typeof(wrap) != "undefined" && wrap !== null && typeof(items) != "undefined" && items !== null) {
			wrap.classList.add('more')
		}
   }
   compactContactsNavItems()

   let displayAkcii = () => {
		let items = document.getElementsByClassName('akcii-card')
		if(typeof(items) != "undefined" && items !== null) {
			items = [].slice.call(items)
 
			items.map((item, i) => {
				if(i == 0) {
					document.getElementById('akcii_image_output').src = item.dataset.image
					document.getElementById('akcii_title_output').textContent = item.dataset.title
					document.getElementById('akcii_secondtitle_output').textContent = item.dataset.title
					document.getElementById('akcii_desc_output').textContent = item.dataset.description
					document.getElementById('akcii_expiration_output').textContent = item.dataset.expiration
				}

				item.onclick = () => {
					document.getElementById('akcii_image_output').src = item.dataset.image
					document.getElementById('akcii_title_output').textContent = item.dataset.title
					document.getElementById('akcii_secondtitle_output').textContent = item.dataset.title
					document.getElementById('akcii_desc_output').textContent = item.dataset.description
					document.getElementById('akcii_expiration_output').textContent = item.dataset.expiration
					$('html, body').animate({scrollTop:$('#akcii').position().top - 10}, 'slow');
				}
			})
		}

   }
   displayAkcii()

   const validateForms = () => {

	var formph = $('.form-designer');	
	formph.validate({
	  submitHandler: function(formph) {
		var fd = new FormData( formph );
		$.ajax({
			async: true,
            url: "", 
            type: "POST",             
            data: fd,
            cache: false,  
			contentType: false,			
            processData: false,      
            success: function(data) {
                if(data == 'done'){
					console.log(data);
					formph.reset();
					document.getElementById('form_designer_button').innerText = 'Успешно отправлено'
				    setTimeout(()=>{
						document.getElementById('form_designer_button').innerText = 'Отправить'
				    }, 3000);
					
				} else {
					console.log(data);
					formph.reset();
					
					setTimeout(()=>{
					  $('#form-response').css("opacity", "0")
				    }, 3000);
				}
            },
			error: function(data){
				console.log('error');
				console.log(data);
			}
        });
        return false;
	  },
	  rules: {
		kitchen_client_name: {
			required: true
		},
		kitchen_client_phone: {
			required: true
		},
		kitchen_processing: {
			required: true
		}
		
	  },
	 messages: {
		kitchen_client_name: {
			required: "Обязательное поле!"
		},
		kitchen_client_phone: {
			required: "Обязательное поле!"
		},
		kitchen_processing: {
			required: "Подтвердите!"
		}
		
	  },
	    errorElement : "div",
		focusInvalid: true,
		errorClass: "input_error"
	});


	var formph = $('#free_design');	
	formph.validate({

		errorPlacement: function(error, element) {
            if (element.attr("name") == "kitchen_form") {
                error.insertAfter(element.parent());
			} else if (element.attr("name") == "kitchen_processing") {
				error.insertAfter(element.parent());
			} else {
				error.insertAfter(element);
			}
            return true;
        },

	  submitHandler: function(formph) {
		var fd = new FormData( formph );
		$.ajax({
			async: true,
            url: "", 
            type: "POST",             
            data: fd,
            cache: false,  
			contentType: false,			
            processData: false,      
            success: function(data) {
                if(data == 'done'){
					console.log(data);
					formph.reset();
					document.getElementById('form_designer_button').innerText = 'Успешно отправлено'
				    setTimeout(()=>{
						document.getElementById('form_designer_button').innerText = 'Отправить'
				    }, 3000);
					
				} else {
					console.log(data);
					formph.reset();
					
					setTimeout(()=>{
					  $('#form-response').css("opacity", "0")
				    }, 3000);
				}
            },
			error: function(data){
				console.log('error');
				console.log(data);
			}
        });
        return false;
	  },
	  rules: {
		kitchen_form: {
			required: true
		},
		kitchen_left_length: {
			required: true
		},
		kitchen_front_length: {
			required: true
		},
		kitchen_right_length: {
			required: true
		},
		kitchen_client_name: {
			required: true
		},
		kitchen_client_phone: {
			required: true
		},
		kitchen_client_email: {
			required: true
		},
		kitchen_client_comment: {
			required: true
		},
		kitchen_processing: {
			required: true
		}
		
	  },
	 messages: {
		kitchen_form: {
			required: "Выберите форму кухни!"
		},
		kitchen_left_length: {
			required: "Обязательное поле!"
		},
		kitchen_front_length: {
			required: "Обязательное поле!"
		},
		kitchen_right_length: {
			required: "Обязательное поле!"
		},
		kitchen_client_name: {
			required: "Обязательное поле!"
		},
		kitchen_client_phone: {
			required: "Обязательное поле!"
		},
		kitchen_client_email: {
			required: "Обязательное поле!"
		},
		kitchen_client_comment: {
			required: "Обязательное поле!"
		},
		kitchen_processing: {
			required:  "Подтвердите согласие!"
		}
		
	  },
	    errorElement : "label",
		focusInvalid: true,
		errorClass: "input_error"
	});

   }

   validateForms()
   