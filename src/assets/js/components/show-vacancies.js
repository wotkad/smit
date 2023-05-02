export default function showVacancies() {
  let button = $('.vacancies__button');
  let vacancy = $('.vacancy-hidden');
  button.on('click', function() {
    $(this).hide();
    vacancy.removeClass('vacancy-hidden');
  });
}
showVacancies();