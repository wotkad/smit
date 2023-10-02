import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import validator from "./validator";

export default function servicesPopup() {
  let button = $('.calculator__button, .service-hero__button');
  let buttonService = $('.service-hero__button');
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
  bg.on('click', function() {
    popup.fadeOut();
    bg.fadeOut(function() {
      enablePageScroll();
    });
  });
  $(window).on('keydown', function(e) {
    if ( e.keyCode == 27 ) {
      popup.fadeOut();
      bg.fadeOut(function() {
        enablePageScroll()
      });
    }
  });

  buttonService.on('click', function() {
    let items = $('.service-popup__dropdown p');
    const index = $(this).attr('data-id');
    Array.from(items).forEach(function(item) {
      $(item).removeClass('active');
      if ($(item).attr('data-id') == index) {
        $(item).addClass('active')
        $('.service-popup__select input').val($(item).text());
      }
    });
  });

  function selectServices() {
    let button = $('.service-popup__select');
    let container = $('.service-popup__dropdown');
    let items = $('.service-popup__dropdown p');
    let materials = $('.service-popup__label-material .service-popup__dropdown p');
    let fastening_types = $('.service-popup__label-fastening_type .service-popup__dropdown p');
    let inputs = $('.service-popup__label input');
    button.on('click', function() {
      $(this).toggleClass('active');
      $(this).next().toggle();
      button.not(this).removeClass('active');
      button.not(this).next().hide();
    });
    materials.on('click', function() {
      const index = $(this).index();
      $('.service-popup__label-material .service-popup__input[name="service_material"]').val($(this).text());
      $('.calculator__label-material .calculator__input[name="service_material"]').val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.service-popup__label-material .service-popup__dropdown p').eq(index).addClass('active');
      $('.calculator__label-material .calculator__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    fastening_types.on('click', function() {
      const index = $(this).index();
      $('.service-popup__label-fastening_type .service-popup__input[name="service_fastening_type"]').val($(this).text());
      $('.calculator__label-fastening_type .calculator__input[name="service_fastening_type"]').val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.calculator__label-fastening_type .calculator__dropdown p').eq(index).addClass('active');
      $('.service-popup__label-fastening_type .service-popup__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    inputs.on('input', function() {
      if ($(this).val()) {
        $(this).parent().removeClass('success');
      }
      const index = $(this).index();
      const name = $(this).attr('name');
      if ($(this).prop('name') == 'service_material') {
        $(this).val('');
        $('.calculator__input[name="service_material"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'service_fastening_type') {
        $(this).val('');
        $('.calculator__input[name="service_fastening_type"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'count') {
        $('.calculator__input[name="count"]').val($(this).val());
      }
      if ($(this).prop('name') == 'height') {
        $('.calculator__input[name="height"]').val($(this).val());
      }
      if ($(this).prop('name') == 'length') {
        $('.calculator__input[name="length"]').val($(this).val());
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
		 if (validator.validateName($('.label-name input').val()) && validator.validateEmail($('.label-email input').val()) && validator.validatePhone($('.label-phone input').val()) && validateInputs()) {
			
			grecaptcha.ready(function() {
				grecaptcha.execute(recaptcha_token, { action: 'submit' }).then(function (token) {
					
					let formData = new FormData(form.get(0));
					let url = form.get(0).action;
					formData.append('token', token);

					fetch(url, {
						method: 'POST',
						headers: {
							'X-CSRFToken' : String(formData.get('csrfmiddlewaretoken')),
						},
						body: formData,
					}).then((response) => {
						if (response.status === 200) {
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
						} else {
							popup.fadeOut(function() {
							errorPopup();
							});
						}
					});

				});
			});
			 
      }
    });
  }
}
servicesPopup();
