import Swiper, { Navigation, Pagination } from 'swiper';

export default function sliderThree() {
  let nextArrow = document.querySelector('.swiper ~ .swiper-button-next');
  let prevArrow = document.querySelector('.swiper ~ .swiper-button-prev');
  new Swiper('.swiper.slider-three', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
    breakpoints: {
      744: {
        slidesPerView: 2,
        spaceBetween: 31
      },
      1212: {
        slidesPerView: 3,
        spaceBetween: 27
      }
    }
  });
}
sliderThree();