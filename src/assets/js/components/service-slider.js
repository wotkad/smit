import Swiper, { Pagination } from 'swiper';

export default function serviceSlider() {
  new Swiper('.service-hero__slider', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });  
}
serviceSlider();