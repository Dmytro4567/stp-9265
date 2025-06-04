import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElements = document.querySelectorAll('#gallery [data-light-box]');

function setHrefLightbox() {
  if (window.devicePixelRatio > 1) {
    galleryElements.forEach(link => {
      const [path, ext] = link.href.split('.');
      const newPath = `${path}@2x.${ext}`;
      link.href = newPath;
    });
  }
}

setHrefLightbox();

const gallery = new SimpleLightbox('[data-light-box]', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionDelay: '250',
});
