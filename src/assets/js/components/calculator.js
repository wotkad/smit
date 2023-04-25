import successPopup from "./success-popup";
import errorPopup from "./error-popup";
import {enablePageScroll} from 'scroll-lock';

function calculator() {

  let form = $('.calculator__form');
  let popup = $('.success-popup');
  let bg = $('.bg');

  function selectServices() {
    let button = $('.calculator__select');
    let container = $('.calculator__dropdown');
    let items = $('.calculator__dropdown p');
    let input = $('.calculator__select input');
    let inputs = $('.calculator__label input');
    button.on('click', function() {
      container.toggle();
      $(this).toggleClass('active');
    });
    items.on('click', function() {
      button.removeClass('active');
      input.val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      container.hide();
    });
    inputs.on('input', function() {
      if ($(this).val()) {
        $(this).parent().addClass('success');
      } else {
        $(this).parent().removeClass('success');
      }
    });
  }
  selectServices();

  if (form) {
    form.submit(function(e) {
      e.preventDefault();
        fetch('/assets/files/calculator.php', {
          method: 'POST',
          body: new FormData(form.get(0))
        }).then((response) => {
          if (response.status == 200) {
            successPopup('Ваша заявка принята', 'Наши менеджеры перезвонят вам в ближайшее время');
            localStorage.setItem('service', $('.calculator__label input[name="service_name"]').val());
            localStorage.setItem('count', $('.calculator__label input[name="count"]').val());
            localStorage.setItem('param', $('.calculator__label input[name="param_value"]').val());
            form.get(0).reset();
          } else if (response.status !== 200) {
            errorPopup();
          }
        });
    });
  }
  
  $('input[name="param_value"], input[name="count"]').on('keydown', function(e) {
    if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
      return false;
    }
  });

  $(window).on('keydown', function(e) {
    if ( e.keyCode == 27 ) {
      popup.fadeOut();
      bg.fadeOut(function() {
        enablePageScroll()
      });
    }
  });

}
calculator();