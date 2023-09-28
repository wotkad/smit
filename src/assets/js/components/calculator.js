import {enablePageScroll} from 'scroll-lock';

export default function calculator() {
  let popup = $('.success-popup');
  let bg = $('.bg');

  function selectServices() {
    let button = $('.calculator__select');
    let container = $('.calculator__dropdown');
    let items = $('.calculator__dropdown p');
    let materials = $('.calculator__label-material .calculator__dropdown p');
    let fastening_types = $('.calculator__label-fastening_type .calculator__dropdown p');
    let inputs = $('.calculator__label input');
    button.on('click', function() {
      $(this).toggleClass('active');
      $(this).next().toggle();
      button.not(this).removeClass('active');
      button.not(this).next().hide();
    });
    materials.on('click', function() {
      const index = $(this).index();
      $('.calculator__label-material .calculator__input[name="service_material"]').val($(this).text());
      $('.service-popup__label-material .service-popup__input[name="service_material"]').val($(this).text());
      items.removeClass('active');
      $(this).addClass('active');
      $('.calculator__label-material .calculator__dropdown p').eq(index).addClass('active');
      $('.service-popup__label-material .service-popup__dropdown p').eq(index).addClass('active');
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
      $('.service-popup-fastening_type .service-popup__dropdown p').eq(index).addClass('active');
      container.hide();
      button.removeClass('active');
    });
    inputs.on('input', function() {
      const index = $(this).index();
      const name = $(this).attr('name');
      if ($(this).prop('name') == 'service_material') {
        $(this).val('');
        $('.service-popup__input[name="service_material"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'service_fastening_type') {
        $(this).val('');
        $('.service-popup__input[name="service_fastening_type"]').val('');
        $('.calculator__dropdown p').eq(index).removeClass('active');
        $('.service-popup__dropdown p').eq(index).removeClass('active');
      }
      if ($(this).prop('name') == 'count') {
        $('.service-popup__input[name="count"]').val($(this).val());
      }
      if ($(this).prop('name') == 'height') {
        $('.service-popup__input[name="height"]').val($(this).val());
      }
      if ($(this).prop('name') == 'length') {
        $('.service-popup__input[name="length"]').val($(this).val());
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