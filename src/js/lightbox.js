import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryElements = document.querySelectorAll('#gallery [data-light-box]');

function setHrefLightbox() {
  if (window.devicePixelRatio > 1) {
    galleryElements.forEach(link => {
      const str = link.href;
      const index = str.indexOf('gallery');
      const afterGallery = str.slice(index + 'gallery'.length);
      link.href = `.${afterGallery}`;
      console.log(link.href);
    });
  }
}

setHrefLightbox();

const gallery = new SimpleLightbox('[data-light-box]', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionDelay: '250',
});
