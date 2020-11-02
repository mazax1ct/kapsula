//открытие/закрытие главного меню
$(document).on('click', '.js-menu-toggler', function() {
  $(this).toggleClass('is-active');
  $('.main-menu').toggleClass('is-open');
  $('body').toggleClass('overflow');
  return false;
});

$(document).ready(function() {
  //слайдер в блоке "Мы"
  $(".rslides").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 500,
    maxwidth: 380,
    prevText: "Назад",
    nextText: "Вперед"
  });
});

//попап
$(document).on('click', '.js-popup-opener', function() {
  $('body').toggleClass('overflow');
  $('.popup-overlay').addClass('is-open');
  $('#' + $(this).attr('data-src')).addClass('is-open');
  return false;
});

function popupClose() {
  $('body').removeClass('overflow');
  $('.popup-overlay').removeClass('is-open');
  $('.popup').removeClass('is-open');
}

$(document).on('click', '.popup-overlay', function (evt) {
  if (!$('.popup').is(evt.target) && $('.popup').has(evt.target).length === 0) {
    popupClose();
  }
});

$(document).on('click', '.js-popup-closer', function() {
  popupClose();
  return false;
});

//перемещение по странице
$(document).on('click', '.main-menu__link', function () {
  $('.main-menu__link').removeClass('is-active');
  $(this).addClass('is-active');
  $('.js-menu-toggler').removeClass('is-active');
  $('.main-menu').removeClass('is-open');
  $('body').removeClass('overflow');
  var offTop = $($(this).attr('href')).offset().top;
  if($('body').width() < 768) {
    offTop = $($(this).attr('href')).offset().top - $('.header').outerHeight();
  }
  $('html, body').animate({scrollTop:offTop}, '1000');
  return false;
});
