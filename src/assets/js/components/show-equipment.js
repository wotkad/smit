export default function showEquipment() {
  let button = $('.equipment__more');
  let equip = $('.equip-hidden');
  let equipShown = $('.equip-shown');
  Array.from(equipShown).forEach(function(item) {
    if ($($(item).next().get(0)).hasClass('equip-hidden')) {
      $(item).addClass('no-padding no-border');
    }
  });
  button.on('click', function() {
    $(this).hide();
    equip.removeClass('equip-hidden no-padding no-border');
  });
}
showEquipment();