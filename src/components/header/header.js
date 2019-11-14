$(window).scroll(function () {
  if ($(this).scrollTop() > 850) {
    $('.header-main').addClass('header-main--fixed');
    $('.header-top').addClass('header-top--fixed');
  } else {
    $('.header-main').removeClass('header-main--fixed');
    $('.header-top').removeClass('header-top--fixed');
  }
});