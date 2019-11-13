$('.faq__title').click(function (e) {
  const $this = $(this);
  const item = $this.parent();
  const items = $this.parents('.faq__list').find('.faq__item');

  items.each((i, el) => {
    el = $(el);
    if (el.hasClass('faq__item--active')) {
      el.removeClass('faq__item--active');
    }
  });

  item.addClass('faq__item--active');
});