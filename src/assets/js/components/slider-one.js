import Swiper, { Autoplay, Pagination } from 'swiper';

export default function sliderOne() {
  new Swiper('.swiper.slider-one', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });  
}
sliderOne();