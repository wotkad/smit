import {enablePageScroll , disablePageScroll, clearQueueScrollLocks} from 'scroll-lock';

export default function errorPopup() {
  let popup = $('.error-popup');
  let button = $('.error-popup__button');
  let bg = $('.bg');
  let labels = $('.calculator__label');
  popup.fadeIn();
  bg.fadeIn();
  labels.removeClass('success');
  disablePageScroll();
  button.on('click', function() {
    popup.fadeOut();
    bg.fadeOut(function() {
      clearQueueScrollLocks();
      enablePageScroll();
    });
  });
}