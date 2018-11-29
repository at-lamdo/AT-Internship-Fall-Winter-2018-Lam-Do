
var listProduct = document.getElementById('product-item');
var cartNumber = document.getElementById('cart_quantity')
function getData() {
  var idProducts = JSON.parse(localStorage.getItem("idProducts"));
  if (!idProducts || !idProducts.length) {
    idProducts = [];
  }
  return idProducts;
}
function addData() {
  var idProducts = getData();
  var item = '';
  for (var i = 0; i < products.length; i++) {
    var isDisabled = (idProducts.indexOf(products[i].id) >= 0) ? 'disabled' : '';
    item += '<ul class="product-sub-list">'
            + '<li><img src="' + products[i]["image"] + '" alt=""></li>'
            + '<li class="product-title">' + products[i]["title"] + '</li>'                    
            + '<li class="product-description">' + products[i]["description"] + '</li>'                  
            + '<li class="product-price">' + Intl.NumberFormat().format(products[i]["price"]) + ",000" + " ₫" + '</li>'
            + '<li><button ' + isDisabled + ' data-id="' + products[i]["id"] + '" class="js-cart-btn"">Add to cart</button></li>'
            + '</ul>';
    cartNumber.innerHTML = '(' + idProducts.length + ')';
  }
  return item;
}
listProduct.innerHTML = addData();
var addBtns = document.getElementsByClassName('js-cart-btn');
 for (var i = 0; i < addBtns.length; i++) {
  addBtns[i].addEventListener('click', function (){
    var id = getData();
    id.push(+this.getAttribute('data-id'));
    this.disabled = true;
    cartNumber.innerHTML = '(' + id.length + ')';
    localStorage.setItem('idProducts', JSON.stringify(id));
  });
}
