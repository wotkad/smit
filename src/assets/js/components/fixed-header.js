function fixedHeader() {
  let header = $('header');
  function checker() {
    if (window.pageYOffset !== 0) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  }
  checker();
  $(window).on('scroll', function() {
    checker();
  })
}
fixedHeader();