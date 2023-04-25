function showDocs() {
  let button = $('.docs__more');
  let doc = $('.doc-hidden');
  button.on('click', function() {
    $(this).hide();
    doc.removeClass('doc-hidden');
  });
}
showDocs();