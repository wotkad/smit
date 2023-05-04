import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import validator from "./validator";

export default function vacancyPopup() {

  let button = $('.vacancy__button');
  let popup = $('.vacancy-popup');
  let bg = $('.bg');
  let close = $('.vacancy-popup__close');
  let form = $('.vacancy-popup__form');
  button.on('click', function() {
    popup.fadeIn();
    bg.fadeIn();
    disablePageScroll(document.querySelector('.vacancy-popup__form'));
  });
  close.on('click', function() {
    popup.fadeOut();
    bg.fadeOut(function() {
      enablePageScroll();
    });
  });

  button.on('click', function() {
    let items = $('.vacancy-popup__dropdown p');
    const index = $(this).attr('data-id');
    Array.from(items).forEach(function(item) {
      $(item).removeClass('active');
      if ($(item).attr('data-id') == index) {
        $(item).addClass('active')
        $('.vacancy-popup__select input').val($(item).text());
      }
    });
  });

  function selectVacancies() {
    let button = $('.vacancy-popup__select');
    let container = $('.vacancy-popup__dropdown');
    let items = $('.vacancy-popup__dropdown p');
    let input = $('.vacancy-popup__select input');
    let inputs = $('.vacancy-popup__label input');
    button.on('click', function() {
      $(this).toggleClass('active');
      container.toggle();
    });
    items.on('click', function() {
      const index = $(this).index();
      input.val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.vacancy-popup__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    inputs.on('input', function() {
      const index = $(this).index();
      const name = $(this).attr('name');
      if ($(this).prop('name') == 'vacancy_name') {
        $(this).val('');
        $('.vacancy-popup__input[name="vacancy_name"]').val('');
        $('.vacancy-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'vacancy_name') {
        $(this).val('');
        $('.vacancy-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).val()) {
        $('.vacancy-popup__label input[name="' + name + '"]').parent().addClass('success');
      } else {
        $('.vacancy-popup__label input[name="' + name + '"]').parent().removeClass('success');
      }
    });
  }
  selectVacancies();

  function isFadedPopup() {
    const form = $('.vacancy-popup__form');
    form.on('scroll', function () {
      if (form.scrollTop() > 0) {
        form.addClass('scrolled');
      } else {
        form.removeClass('scrolled');
      }
      if (form.scrollTop == 0) {
        form.removeClass('scrolled');
      }
    });
  }
  isFadedPopup();

  if (form) {
    form.submit(function(e) {
      e.preventDefault();
      if (validator.validateName($('.label-name input').val()) && validator.validateEmail($('.label-email input').val()) && validator.validatePhone($('.label-phone input').val())) {
        fetch('/assets/files/vacancy.php', {
          method: 'POST',
          body: new FormData(form.get(0))
        }).then((response) => {
          if (response.status == 200) {
            form.get(0).reset();
            $('.vacancy-popup__dropdown p').removeClass('active');
            popup.fadeOut(function() {
              successPopup('Ваша заявка принята', 'Наши менеджеры перезвонят вам в ближайшее время');
              $('.vacancy-popup__label').removeClass('success');
            });
          } else if (response.status !== 200) {
            popup.fadeOut(function() {
              errorPopup();
            });
          }
        });
      }
    });
  }
}
vacancyPopup();
