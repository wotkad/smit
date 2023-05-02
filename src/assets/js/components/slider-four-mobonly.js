import Swiper, { Pagination, Grid } from 'swiper';

export default function sliderFourMobOnly() {
  new Swiper('.swiper.slider-four-mobonly', {
    modules: [Pagination, Grid],
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      744: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: "row"
        },
        spaceBetween: 30,
      },
      1212: {
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: "row"
        },
        spaceBetween: 42,
      }
    }
  });
}
sliderFourMobOnly();
