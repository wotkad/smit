export default function toggleVacancy() {
  let button = $('.vacancy__header');
  button.on('click', function() {
    button.not($(this)).parent().removeClass('active');
    $(this).parent().toggleClass('active');
  });
}
toggleVacancy();