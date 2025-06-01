import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

let worldDungeonsSwiper;
const mobileMediaQuery = window.matchMedia('(max-width: 1199px)');

function initSwiperWorldDungeons() {
  if (mobileMediaQuery.matches && !worldDungeonsSwiper) {
    worldDungeonsSwiper = new Swiper('#world-dungeons-swiper', {
      modules: [Pagination, Navigation],
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '#world-dungeons-swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '#world-dungeons-swiper-next',
        prevEl: '#world-dungeons-swiper-prev',
      },
    });
  } else if (!mobileMediaQuery.matches && worldDungeonsSwiper) {
    worldDungeonsSwiper.destroy(true, true);
    worldDungeonsSwiper = null;
  }
}

initSwiperWorldDungeons();

mobileMediaQuery.addEventListener('change', initSwiperWorldDungeons);
