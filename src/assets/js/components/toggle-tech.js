function toggleTech() {
  let button = $('.tech-cycle__item__header');
  button.on('click', function() {
    button.not($(this)).next().slideUp();
    button.not($(this)).parent().removeClass('active');
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
  });
}
toggleTech();