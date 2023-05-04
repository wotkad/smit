import lightGallery from "lightgallery";
import lgPager from 'lightgallery/plugins/pager'

export default function gallery() {
  let galleries = $('.gallery');
  Array.from(galleries).forEach(function(gallery) {
    lightGallery(gallery, {
      licenseKey: 'UNLICENSED',
      controls: true,
      plugins: [lgPager]
    });
  });
}
gallery();