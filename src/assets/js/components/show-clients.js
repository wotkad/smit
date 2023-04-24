function showClients() {
  let button = $('.clients__more');
  let client = $('.client-hidden');
  button.on('click', function() {
    $(this).hide();
    client.removeClass('client-hidden');
  });
}
showClients();