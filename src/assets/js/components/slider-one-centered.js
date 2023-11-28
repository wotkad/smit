import Swiper, { Autoplay, Pagination } from 'swiper';

export default function sliderOneCentered() {
  new Swiper('.swiper.slider-one-centered', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    initialSlide: 1,
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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