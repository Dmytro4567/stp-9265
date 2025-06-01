import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

let heroClassessSwiper;
const mobileMediaQuery = window.matchMedia('(max-width: 1199px)');

function initSwiperHeroClasses() {
  if (mobileMediaQuery.matches && !heroClassessSwiper) {
    heroClassessSwiper = new Swiper('#hero-classes-swiper', {
      modules: [Pagination, Navigation],
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '#hero-classes-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#hero-classes-swiper-next',
        prevEl: '#hero-classes-swiper-prev',
      },
    });
  } else if (!mobileMediaQuery.matches && heroClassessSwiper) {
    heroClassessSwiper.destroy(true, true);
    heroClassessSwiper = null;
  }
}

initSwiperHeroClasses();

mobileMediaQuery.addEventListener('change', initSwiperHeroClasses);
