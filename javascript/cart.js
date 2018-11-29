var total = 0;
var idProducts = JSON.parse(localStorage.getItem('idProducts'));
var listRemoveBtn = document.getElementsByClassName('remove-btn');
var tableBody = document.getElementById('table-body');
var totalElement = document.getElementById('total');
var cartNumber = document.getElementById('cart_quantity');

function addTable() {
  var row = [];
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < idProducts.length; j++) {
      if (idProducts[j] === +products[i].id) {
        row.push(products[i]);
        total += products[i].price;
      }
    }
  }
  var addRow = '';
  for (var i = 0; i < row.length; i++) {
    addRow += '<tr data-id="'+ row[i]["id"] +'" class="table-item">' +
            '<td class="item-content">' +
            '<img class="item-img" src="'+ row[i]["image"] +'" alt="' + row[i]["title"] + '">' +
            '<h3 class="item-title">'+ row[i]["title"] +'</h3>' +
            '</td>' +
            '<td class="item-price">' + Intl.NumberFormat().format(row[i]["price"]) + ",000" + " ₫" +
            '</td>' +
            '<td class="item-quantity">1</td>' +
            '<td class="item-button"><button class="remove-btn">X</button></td>' +
            '</tr>';
  }
  return addRow;
}

function renderView() {
    tableBody.innerHTML = addTable();
    totalElement.innerHTML = Intl.NumberFormat().format(total) + ",000" + " ₫";
    cartNumber.innerHTML = '(' + idProducts.length + ')';
}

renderView();

for (var i = 0; i < listRemoveBtn.length; i++) {
  listRemoveBtn[i].addEventListener('click', function() {
    var rmConfirm = confirm("Do you want to remove the product ?");
    if (rmConfirm == true) {
        var idProducts = JSON.parse(localStorage.getItem('idProducts'));
        var trElement = this.parentElement.parentElement;
        var idPro = +trElement.getAttribute("data-id");
        for (var i = 0; i < products.length; i++) {
          if (idPro === products[i].id ) {
            total -= products[i].price;
          } 
        }
        idProducts = idProducts.filter(function(value){
          return (value !== idPro);
        });
        tableBody.removeChild(trElement);
        totalElement.innerHTML = Intl.NumberFormat().format(total) + ",000" + " ₫";
        cartNumber.innerHTML = '(' + idProducts.length + ')';
        localStorage.setItem('idProducts', JSON.stringify(idProducts));
      } else {
        totalElement.innerHTML = Intl.NumberFormat().format(total) + ",000" + " ₫";
        cartNumber.innerHTML = '(' + idProducts.length + ')';
      }

    });
}
