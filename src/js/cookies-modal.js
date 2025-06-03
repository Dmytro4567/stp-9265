document.addEventListener('DOMContentLoaded', function () {
  const cookiesModal = document.getElementById('cookiesModal');

  if (localStorage.getItem('cookies') !== 'true') {
    cookiesModal.style.display = 'block';
  }

  cookiesModal.querySelectorAll('.cookies-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('cookies', 'true');
      cookiesModal.style.display = 'none';
    });
  });
});