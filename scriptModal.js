// Header Modal
let modalBtn = document.querySelector(".header__button"),
    modalBody = document.querySelector(".header__modal"),
    modalWindow = document.querySelector(".header__modal-form"),
    modalClose = document.querySelector(".modal-form__cross");

modalBtn.addEventListener("click", headerModalOpen);
modalClose.addEventListener("click", headerModalClose);

function headerModalOpen(e) {
  e.preventDefault();
  modalBody.classList.add("modal-active");
  modalWindow.classList.add("modal-active");
  body.classList.add('noscroll');
}

function headerModalClose(e) {
  e.preventDefault();
  modalBody.classList.remove("modal-active");
  modalWindow.classList.remove("modal-active");
  body.classList.remove('noscroll');
}

document.addEventListener("click", (e) => {
  if (e.target === modalBody) {
    headerModalClose(e);
  }
});
