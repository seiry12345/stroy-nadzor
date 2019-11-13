let modalVars = {
  modal: $('.modal'),
  overlay: $('.overlay'),
  body: $('body'),
  callBtn: $('.btn-callmodal'),
  closeBtn: $('.modal__btn-close'),
};

// functions
function showModal(e) {
  modalVars.modal.addClass('modal--active');
  modalVars.overlay.addClass('overlay--active');
  modalVars.body.addClass('body-hidden');
}

function closeModal() {
  modalVars.modal.removeClass('modal--active');
  modalVars.overlay.removeClass('overlay--active');
  modalVars.body.removeClass('body-hidden');
}

// events
modalVars.callBtn.click(function (e) {
  e.preventDefault();
  showModal();
});

modalVars.closeBtn.click(function (e) {
  e.preventDefault();
  closeModal();
})

modalVars.body.on('keydown', function (e) {
  if (e.keyCode === 27 && modalVars.modal.hasClass('modal--active')) {
    closeModal(e);
  }
});