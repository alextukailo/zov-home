"use strict";

if ($('.hero-carousel').length) {
  $('.hero-carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    // stagePadding: 300,
    margin: 0,
    nav: false,
    smartSpeed: 700,
    autoplayTimeout: 7000,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  });
}

if ($('.products__slider').length) {
  $('.products__slider').owlCarousel({
    loop: true,
    lazyLoad: true,
    // stagePadding: 300,
    margin: 30,
    nav: true,
    smartSpeed: 700,
    autoplayTimeout: 7000,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 4
      }
    }
  });
}

if ($('.reviews__slider').length) {
  $('.reviews__slider').owlCarousel({
    loop: true,
    lazyLoad: true,
    // stagePadding: 300,
    margin: 30,
    nav: true,
    smartSpeed: 700,
    autoplayTimeout: 7000,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      }
    }
  });
}

$('.contacts__city').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('opened');
});
$('.location__head').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('opened');
});
$('.sidebar__head').click(function () {
  $(this).next().slideToggle();
  $(this).toggleClass('opened');
});

if (window.innerWidth <= 537) {
  $('.footer__item.lg').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('opened');
  });
}

$('.about__video_btn').click(function () {
  $('.modal-about').fadeIn();
});
$('.modal-about__close').click(function () {
  $('.modal-about').fadeOut();
});

var currentYear = function currentYear() {
  var today = new Date();
  var year = today.getFullYear();
  document.getElementById("yearVal").innerHTML = year;
};

currentYear();

var reviewsTextLimit = function reviewsTextLimit() {
  var text = document.getElementsByClassName('reviews__text'),
      btns = $('.reviews__more');
  text = [].slice.call(text);
  btns = [].slice.call(btns);
  text.map(function (item) {
    item.innerText = item.innerText.slice(0, 270) + '...';
  });
}; // reviewsTextLimit()


var syncCarousel = function syncCarousel() {
  $(document).ready(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 5;
    var syncedSecondary = false;
    sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['', '']
    }).on('changed.owl.carousel', syncPosition);
    sync2.on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
      items: slidesPerPage,
      dots: true,
      loop: true,
      nav: false,
      margin: 15,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage,
      responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - .5);

      if (current < 0) {
        current = count;
      }

      if (current > count) {
        current = 0;
      } //end block


      sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
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
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index() + 1;
      sync1.data('owl.carousel').to(number, 300, true);
    });
  });
};

syncCarousel();

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

var selectCustomComponent = function selectCustomComponent() {
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
      $('.select__head').removeClass('open');
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
};

selectCustomComponent();
$('.nav-mobile__button').click(function () {
  $('.nav-mobile__menu').fadeIn();
});
$('.nav-mobile__close').click(function () {
  $('.nav-mobile__menu').fadeOut();
});

var nav = function nav() {
  var navItem = document.getElementsByClassName('nav__link');
  var mobileWrap = document.getElementById('nav-mobile_menu');
  var navArr = [].slice.call(navItem);
  var mobileNav = navArr.map(function (nav) {
    var id = nav.href;
    return '<a class="nav-mobile__menu_item" href="' + id + '">' + nav.innerText + '</a>';
  });
  mobileWrap.innerHTML = mobileNav.join(' ');
};

nav();

var displayMoreBtn = function displayMoreBtn() {
  var selectLists = document.getElementsByClassName('select__list');
  selectLists = [].slice.call(selectLists);
  selectLists.map(function (selectList) {
    if (selectList.children[0].children.length < 2) {
      selectList.children[0].classList.remove("full");

      if (typeof selectList.children[0].children[0] != "undefined" && selectList.children[0].children[0] !== null) {
        selectList.children[0].children[0].style.marginBottom = "0";
      }

      selectList.children[1].hidden = true;
    }
  });
};

displayMoreBtn();
$('.filter_more').click(function () {
  var text = $(this).text();
  $(this).toggleClass('full');
  $(this).prev().toggleClass('full');
  $(this).text(text == "Показать все" ? "Скрыть" : "Показать все");
});
$('.faq__head').click(function () {
  $(this).toggleClass('opened');
  $(this).next().slideToggle();
});

if (window.innerWidth <= 537) {
  $('.filter-mobile').click(function () {
    $('.filter__content').fadeToggle();
    $('.filter__choises_mobile').fadeToggle();
    $(this).toggleClass('opened');
  });
}

document.querySelectorAll('.input_number').forEach(function (el) {
  el.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d]/g, '');
  });
});

var displayCheckedFilter = function displayCheckedFilter() {
  var themes = [];
  var list_checkbox = document.querySelectorAll('.checkbox');
  var choiseArr;
  var output = document.getElementById("filter_res");
  list_checkbox = [].slice.call(list_checkbox);
  list_checkbox.map(function (item) {
    item.onclick = function () {
      if (item.checked) {
        themes.push(item.value);
        choiseArr = themes.slice().join('; ');
        output.innerHTML = '<div class="filter__item">' + choiseArr + '</div>';
      } else if (!item.checked) {
        themes.pop(item.value);
        choiseArr = themes.slice().join('; ');
        output.innerHTML = '<div class="filter__item">' + choiseArr + '</div>';
      }
    };
  });

  if (window.innerWidth <= 537) {
    var newC = ['button__blue', 'button__blue_arrow'],
        oldC = ['button__black', 'button__black_arrow'];
    var button = document.getElementById('filter_submit');

    if (typeof button != "undefined" && button !== null) {
      var _button$classList, _button$classList2;

      (_button$classList = button.classList).add.apply(_button$classList, newC);

      (_button$classList2 = button.classList).remove.apply(_button$classList2, oldC);
    }
  }
};

displayCheckedFilter();

var likes = function likes() {
  var item = document.getElementById('likes');
  var clicks = 0;

  if (typeof item != "undefined" && item !== null) {
    item.onclick = function () {
      clicks += 1;
      this.innerHTML = clicks;
    };
  }
};

likes();


var fileOutput = document.getElementById('fileOutput');

function validateFile() {
  // const allowedExtensions =  ['jpg','png','svg'],
  var allowedExtensions = [],
      sizeLimit = 10000000;
  var files = [].slice.call(this.files);
  var _this$files$ = this.files[0],
      fileName = _this$files$.name,
      fileSize = _this$files$.size;
  var fileExtension = fileName.split(".").pop();

  if (!allowedExtensions.includes(fileExtension)) {
    var filesList = files.map(function (file) {
      var fileType = file.name.split(".").pop();
      return '<div><span class="badge mr-1 badge-danger">' + fileType + '</span><span id="fileNameOutput">' + file.name + '</span></div>';
    });
    fileOutput.innerHTML = filesList.join(' ');
  } else if (fileSize > sizeLimit) {// this.value = null;
  }
}

if (typeof fileOutput != "undefined" && fileOutput !== null) {
  document.getElementById("fileUpload").addEventListener("change", validateFile);
}