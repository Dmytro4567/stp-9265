const menuButtons = document.querySelectorAll('[data-mobile-menu]');
const modal = document.querySelector('[data-modal-mobile]');

function mobileMenuHandler() {
  modal.classList.toggle('is-open');
  document.body.style.overflow = modal.classList.contains('is-open')
    ? 'hidden'
    : '';
}

function closeMobileMenuHandler(event) {
  if (event.target.tagName === 'A') {
    mobileMenuHandler();
  }
}

modal.addEventListener('click', closeMobileMenuHandler);
menuButtons.forEach(button =>
  button.addEventListener('click', mobileMenuHandler)
);
