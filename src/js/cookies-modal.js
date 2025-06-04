document.addEventListener('DOMContentLoaded', function () {
  const cookiesModal = document.getElementById('cookiesModal');

  if (localStorage.getItem('cookies') !== 'true') {
    cookiesModal.style.display = 'block';
  }

  const acceptBtn = cookiesModal.querySelector('[data-cookie-action="accept"]');
  const declineBtn = cookiesModal.querySelector('[data-cookie-action="decline"]');

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookies', 'true');
    cookiesModal.style.display = 'none';
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookies', 'true');
    cookiesModal.style.display = 'none';
  });
});