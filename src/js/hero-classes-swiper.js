import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let heroClassessSwiper;
const mobileMediaQuery = window.matchMedia('(max-width: 1199px)');

function initSwiperHeroClasses() {
  if (mobileMediaQuery.matches && !heroClassessSwiper) {
    heroClassessSwiper = new Swiper('#hero-classes-swiper', {
      modules: [Pagination],
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '#hero-classes-swiper-pagination',
        clickable: true,
      },
    });
  } else if (!mobileMediaQuery.matches && heroClassessSwiper) {
    heroClassessSwiper.destroy(true, true);
    heroClassessSwiper = null;
  }
}

initSwiperHeroClasses();

mobileMediaQuery.addEventListener('change', initSwiperHeroClasses);
