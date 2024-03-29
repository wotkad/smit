import {enablePageScroll , disablePageScroll} from 'scroll-lock';

export default function mobileMenu() {
  let button = $('.header__burger');
  let menu = $('.header__mobmenu');
  let close = $('.header__mobmenu__close');
  let items = $('.header__mobmenu a');
  let bg = $('.bg');
  button.on('click', function() {
    menu.addClass('active');
    bg.fadeIn();
    disablePageScroll();
  });
  close.on('click', function() {
    menu.removeClass('active');
    bg.fadeOut();
    enablePageScroll();
  });
  Array.from(items).forEach(link => {
    $(link).on('click', function() {
      menu.removeClass('active');
      bg.fadeOut();
      enablePageScroll();
    });
  });
}
mobileMenu();

function mobileList() {
  let button = $('.header__mobmenu__dropdown__main');
  let list = $('.header__mobmenu__list');
  button.on('click', function() {
    $(this).toggleClass('active');
    list.slideToggle();
  });
}
mobileList();