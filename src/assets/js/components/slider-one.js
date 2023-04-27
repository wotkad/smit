import Swiper, { Pagination } from 'swiper';

export default function sliderOne() {
  new Swiper('.slider-one', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });  
}
sliderOne();