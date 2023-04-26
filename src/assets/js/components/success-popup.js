import {enablePageScroll , disablePageScroll, clearQueueScrollLocks} from 'scroll-lock';

export default function successPopup(title, text) {
  let popup = $('.success-popup');
  let button = $('.success-popup__button');
  let bg = $('.bg');
  let labels = $('.calculator__label');
  let heading = $('.success-popup__title__inner');
  let content = $('.success-popup__text');
  popup.fadeIn();
  bg.fadeIn();
  labels.removeClass('success');
  disablePageScroll();
  heading.text(title);
  content.text(text);
  button.on('click', function() {
    popup.fadeOut();
    bg.fadeOut(function() {
      heading.text('');
      content.text('');
      clearQueueScrollLocks();
      enablePageScroll();
    });
  });
}