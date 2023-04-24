import Swiper, { Navigation, Pagination } from 'swiper';

function servicesSlider() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.services__slider .swiper-button-next',
      prevEl: '.services__slider .swiper-button-prev',
    },
    breakpoints: {
      744: {
        slidesPerView: 2,
        spaceBetween: 31
      },
      1212: {
        slidesPerView: 3,
        spaceBetween: 27
      },
    }
  });
}
servicesSlider();