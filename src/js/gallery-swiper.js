import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

let gallerySwiper;

function initSwiperGallery() {
  gallerySwiper = new Swiper('#gallery-swiper', {
    modules: [Pagination, Navigation],
    spaceBetween: 32,
    slidesPerView: 1,
    pagination: {
      el: '#gallery-swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#gallery-swiper-next',
      prevEl: '#gallery-swiper-prev',
    },
    breakpoints: {
      1200: { allowTouchMove: false },
    },
  });
}

initSwiperGallery();
