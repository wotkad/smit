import Swiper, { Navigation, Pagination } from 'swiper';

export default function sliderThree() {
  Array.from($('.slider-three')).forEach(function(slider) {
    new Swiper(slider, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: $(slider).siblings('.swiper-button-next').get(0),
        prevEl: $(slider).siblings('.swiper-button-prev').get(0)
      },
      breakpoints: {
        744: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1212: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  });
}
sliderThree();
