import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElements = document.querySelectorAll('#gallery [data-light-box]');

function setHrefLightbox() {
  if (window.devicePixelRatio > 1) {
    galleryElements.forEach(link => {
      const href = link.href;
      const lastDotIndex = href.lastIndexOf('.');
      const path = href.slice(0, lastDotIndex);
      const ext = href.slice(lastDotIndex + 1);
      link.href = `${path}@2x.${ext}`;
    });
  }
}

setHrefLightbox();

const gallery = new SimpleLightbox('[data-light-box]', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionDelay: '250',
});
