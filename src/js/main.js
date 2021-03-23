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

var compactContactsNavItems = function compactContactsNavItems() {
  var wrap = document.getElementById('nav-contacts');
  var items = document.getElementsByClassName('nav-contacts__item');

  if (items.length >= 9 && typeof wrap != "undefined" && wrap !== null && typeof items != "undefined" && items !== null) {
    wrap.classList.add('more');
  }
};

compactContactsNavItems();

var displayAkcii = function displayAkcii() {
  var items = document.getElementsByClassName('akcii-card');

  if (typeof items != "undefined" && items !== null) {
    items = [].slice.call(items);
    items.map(function (item, i) {
      if (i == 0) {
        document.getElementById('akcii_image_output').src = item.dataset.image;
        document.getElementById('akcii_title_output').textContent = item.dataset.title;
        document.getElementById('akcii_secondtitle_output').textContent = item.dataset.title;
        document.getElementById('akcii_desc_output').textContent = item.dataset.description;
        document.getElementById('akcii_expiration_output').textContent = item.dataset.expiration;
      }

      item.onclick = function () {
        document.getElementById('akcii_image_output').src = item.dataset.image;
        document.getElementById('akcii_title_output').textContent = item.dataset.title;
        document.getElementById('akcii_secondtitle_output').textContent = item.dataset.title;
        document.getElementById('akcii_desc_output').textContent = item.dataset.description;
        document.getElementById('akcii_expiration_output').textContent = item.dataset.expiration;
        $('html, body').animate({
          scrollTop: $('#akcii').position().top - 10
        }, 'slow');
      };
    });
  }
};

displayAkcii();












// ВАЛИДАЦИЯ


// обновление скриптов с 16.03

// Validation Plugin - v1.19.2

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});

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
 