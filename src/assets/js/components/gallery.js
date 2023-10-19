import lightGallery from "lightgallery";
import lgPager from 'lightgallery/plugins/pager'
import { clearQueueScrollLocks, disablePageScroll, enablePageScroll } from "scroll-lock";

export default function gallery() {
  let galleries = $('.gallery');
  Array.from(galleries).forEach(function(gallery) {
    lightGallery(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      plugins: [lgPager]
    });
  });
  $('.case__slider, .lg-outer, .work__title').on('click', function() {
    if ($('html').hasClass('lg-on')) {
      disablePageScroll();
    } else {
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });
  $('.work__title').on('click', function() {
    $(this).next().find('img').trigger("click");
  });
}
gallery();