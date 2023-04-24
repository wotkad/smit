function showProduct() {
  let button = $('.production__more');
  let product = $('.product-hidden');
  button.on('click', function() {
    $(this).hide();
    product.removeClass('product-hidden');
  });
}
showProduct();