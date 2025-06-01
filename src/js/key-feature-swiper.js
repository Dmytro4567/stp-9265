import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

let keyFeaturesSwiper;
const mobileMediaQuery = window.matchMedia('(max-width: 1199px)');

function initSwiperKeyFeatures() {
  if (mobileMediaQuery.matches && !keyFeaturesSwiper) {
    keyFeaturesSwiper = new Swiper('#key-features-swiper', {
      modules: [Pagination, Navigation],
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '#key-features-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#key-features-swiper-next',
        prevEl: '#key-features-swiper-prev',
      },
    });
  } else if (!mobileMediaQuery.matches && keyFeaturesSwiper) {
    keyFeaturesSwiper.destroy(true, true);
    keyFeaturesSwiper = null;
  }
}

initSwiperKeyFeatures();

mobileMediaQuery.addEventListener('change', initSwiperKeyFeatures);
