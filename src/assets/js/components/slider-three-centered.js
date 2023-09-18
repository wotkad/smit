import Swiper, { Navigation } from 'swiper';

export default function sliderThreeCentered() {
  Array.from($('.slider-three-centered')).forEach(function(slider) {
    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      initialSlide: 1,
      navigation: {
        nextEl: $(slider).siblings('.swiper-button-next').get(0),
        prevEl: $(slider).siblings('.swiper-button-prev').get(0)
      },
      breakpoints: {
        744: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1212: {
          slidesPerView: 3,
          spaceBetween: 20,
          initialSlide: 0,
          centeredSlides: false,
        }
      }
    });
  });
}
sliderThreeCentered();
