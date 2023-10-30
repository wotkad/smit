import { enablePageScroll, disablePageScroll } from 'scroll-lock';

export default function popupComeback() {
  let popup = $('.popup-comeback');
  let bg = $('.bg');
  let close = $('.popup-comeback__close');

  let classView = localStorage.getItem('comeback');
  classView && popup.hide();
  classView && bg.hide();
  enablePageScroll();

  $(document).on('mouseleave', function() {
    if (localStorage.getItem('comeback') !== 'true') {
      popup.fadeIn()
      bg.fadeIn();
      disablePageScroll();
    }
    localStorage.setItem('comeback', 'true');
    localStorage.setItem('comebackAddedDate', new Date().toString());
  });
  close.on('click', function() {
    localStorage.setItem('comeback', 'true');
    popup.fadeOut();
    bg.fadeOut(function() {
      enablePageScroll();
    });
  });

  if (localStorage.getItem('comeback') !== null) {
    const addedDate = new Date(localStorage.getItem('comebackAddedDate'));
    const currentDate = new Date();
    const timeDifference = currentDate - addedDate;
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    if (timeDifference >= oneWeekInMilliseconds) {
        localStorage.removeItem('comeback');
        localStorage.removeItem('comebackAddedDate');
    }
  }
}
popupComeback();