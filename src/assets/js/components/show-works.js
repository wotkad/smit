export default function showWork() {
  let button = $('.works__more');
  let work = $('.work-hidden');
  button.on('click', function() {
    $(this).hide();
    work.removeClass('work-hidden');
  });
}
showWork();