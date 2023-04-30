import {enablePageScroll} from 'scroll-lock';

export default function calculator() {
  let popup = $('.success-popup');
  let bg = $('.bg');

  function selectServices() {
    let button = $('.calculator__select');
    let container = $('.calculator__dropdown');
    let items = $('.calculator__dropdown p');
    let input = $('.calculator__select input');
    let inputs = $('.calculator__label input');
    button.on('click', function() {
      $(this).toggleClass('active');
      container.toggle();
    });
    items.on('click', function() {
      const index = $(this).index();
      input.val($(this).text());
      $('.service-popup__input[name="service_name"]').val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.calculator__dropdown p').eq(index).addClass('active');
      $('.service-popup__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    inputs.on('input', function() {
      const index = $(this).index();
      const name = $(this).attr('name');
      if ($(this).prop('name') == 'service_name') {
        $(this).val('');
        $('.service-popup__input[name="service_name"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'count') {
        $('.service-popup__input[name="count"]').val($(this).val());
      }
      if ($(this).prop('name') == 'param_value') {
        $('.service-popup__input[name="param_value"]').val($(this).val());
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
  
  $('input[name="param_value"], input[name="count"]').on('keydown', function(e) {
    if (e.key.length == 1 && e.key.match(/[^0-9'".]/)) {
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