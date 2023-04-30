import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { validateEmail, validatePhone, validateName } from "./validator";

export default function servicesPopup() {

  let button = $('.calculator__button');
  let popup = $('.service-popup');
  let bg = $('.bg');
  let close = $('.service-popup__close');
  let form = $('.service-popup__form');
  button.on('click', function() {
    popup.fadeIn();
    bg.fadeIn();
    disablePageScroll(document.querySelector('.service-popup__form'));
  });
  close.on('click', function() {
    popup.fadeOut();
    bg.fadeOut(function() {
      enablePageScroll();
    });
  });

  function selectServices() {
    let button = $('.service-popup__select');
    let container = $('.service-popup__dropdown');
    let items = $('.service-popup__dropdown p');
    let input = $('.service-popup__select input');
    let inputs = $('.service-popup__label input');
    button.on('click', function() {
      $(this).toggleClass('active');
      container.toggle();
    });
    items.on('click', function() {
      const index = $(this).index();
      input.val($(this).text());
      $('.calculator__input[name="service_name"]').val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.calculator__dropdown p').eq(index).addClass('active');
      $('.service-popup__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    inputs.on('input', function() {
      if ($(this).val()) {
        $(this).parent().removeClass('success');
      }
      const index = $(this).index();
      const name = $(this).attr('name');
      if ($(this).prop('name') == 'service_name') {
        $(this).val('');
        $('.calculator__input[name="service_name"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'count') {
        $('.calculator__input[name="count"]').val($(this).val());
      }
      if ($(this).prop('name') == 'param_value') {
        $('.calculator__input[name="param_value"]').val($(this).val());
      }
      if ($(this).val()) {
        $('.service-popup__label input[name="' + name + '"]').parent().addClass('success');
        $('.calculator__label input[name="' + name + '"]').parent().addClass('success');
      } else {
        $('.service-popup__label input[name="' + name + '"]').parent().removeClass('success');
        $('.calculator__label input[name="' + name + '"]').parent().removeClass('success');
      }
    });
    $(document).on('mousedown', (event) => {
      if (container.css('display') == 'block' && !container.is(event.target) && !items.is(event.target)) {
        button.removeClass('active');
        container.hide();
      }
    });
  }
  selectServices();

  function isFadedPopup() {
    const form = $('.service-popup__form');
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
      if (validateName($('.service-popup__label-name input').val()) && validateEmail($('.service-popup__label-email input').val()) && validatePhone($('.service-popup__label-phone input').val())) {
        fetch('/assets/files/service.php', {
          method: 'POST',
          body: new FormData(form.get(0))
        }).then((response) => {
          if (response.status == 200) {
            form.get(0).reset();
            $('.service-popup__dropdown p').removeClass('active');
            $('.calculator__select input').val('');
            $('.calculator__label input').val('');
            $('.calculator__dropdown p').removeClass('active');
            popup.fadeOut(function() {
              successPopup('Спасибо за заказ', 'Наши менеджеры перезвонят вам для подтверждения заявки и уточнения деталей заказа');
              $('.service-popup__label').removeClass('success');
              $('.calculator__label').removeClass('success');
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
servicesPopup();
