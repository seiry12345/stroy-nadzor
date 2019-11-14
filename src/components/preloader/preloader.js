setTimeout(function () {
  const preloader = $('.preloader');
  if (!preloader.hasClass('preloader--done')) {
    preloader.addClass('preloader--done');
  }
}, 1000);