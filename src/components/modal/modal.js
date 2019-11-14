let modalVars = {
  modal: $('.modal'),
  overlay: $('.overlay'),
  body: $('body'),
  callBtn: $('.btn-callmodal'),
  closeBtn: $('.modal__btn-close'),
};

// functions
function showModal() {
  modalVars.modal.addClass('modal--active');
  modalVars.overlay.addClass('overlay--active');
  modalVars.body.addClass('body-hidden');
  setScroll();
}

function closeModal() {
  modalVars.modal.removeClass('modal--active');
  modalVars.overlay.removeClass('overlay--active');
  modalVars.body.removeClass('body-hidden');
}

function setScroll() {
  if ($(window).height() < 485) {
    modalVars.modal.addClass('modal--height');
  }
}

// events
modalVars.callBtn.click(function (e) {
  e.preventDefault();
  showModal();
});

modalVars.closeBtn.click(function (e) {
  e.preventDefault();
  closeModal();
});

modalVars.body.on('keydown', function (e) {
  if (e.keyCode === 27 && modalVars.modal.hasClass('modal--active')) {
    closeModal(e);
  }
});