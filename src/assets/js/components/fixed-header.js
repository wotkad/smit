function fixedHeader() {
  let header = $('header');
  function checker() {
    if ($('main').scrollTop() !== 0) {
      header.addClass('active');
    } else {
      header.removeClass('active');
    }
  }
  checker();
  $('main').on('scroll', function() {
    checker();
  })
}
fixedHeader();