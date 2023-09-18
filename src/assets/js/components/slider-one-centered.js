import Swiper, { Pagination } from 'swiper';

export default function sliderOneCentered() {
  new Swiper('.swiper.slider-one-centered', {
    modules: [Pagination],
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
      746: {
        slidesPerView: 1,
        initialSlide: 1,
      },
      1212: {
        slidesPerView: 1,
        initialSlide: 0,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });  
}
sliderOneCentered();