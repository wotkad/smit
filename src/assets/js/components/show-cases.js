export default function showCases() {
  let button = $('.cases__button');
  let caseHidden = $('.case-hidden');
  let caseItems = $('.case');
  Array.from(caseItems).forEach(function(item) {
    if ($(item).next().hasClass('case-hidden')) {
      $(item).addClass('case-noborder');
    }
  });
  button.on('click', function() {
    caseItems.removeClass('case-noborder');
    $(this).hide();
    caseHidden.removeClass('case-hidden');
  });
}
showCases();