import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let keyFeaturesSwiper;
const mobileMediaQuery = window.matchMedia('(max-width: 1199px)');

function initSwiperKeyFeatures() {
  if (mobileMediaQuery.matches && !keyFeaturesSwiper) {
    keyFeaturesSwiper = new Swiper('#key-features-swiper', {
      modules: [Pagination],
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '#key-features-swiper-pagination',
        clickable: true,
      },
    });
  } else if (!mobileMediaQuery.matches && keyFeaturesSwiper) {
    keyFeaturesSwiper.destroy(true, true);
    keyFeaturesSwiper = null;
  }
}

initSwiperKeyFeatures();

mobileMediaQuery.addEventListener('change', initSwiperKeyFeatures);
