//Show list product
var product = [
        {
            "id" : 1,
            "image" : "images/iphone-xs-max-512gb-gold-400x460.png",
            "title" : "Điện thoại iPhone Xs Max 512GB",
            "description"  : "Là chiếc smartphone cao cấp nhất của Apple với mức giá khủng chưa từng có, bộ nhớ trong lên tới 512GB, iPhone XS Max 512GB - sở hữu cái tên khác biệt so với các thế hệ trước, trang bị tới 6.5 inch đầu tiên của hãng cùng các thiết kế cao cấp hiện đại từ chip A12 cho tới camera AI.",
            "price" : "42.990.000₫"
        },
        {
            "id" : 2,
            "image" : "images/iphone-x-256gb-silver-400x460.png",
            "title" : "Điện thoại iPhone X 256GB Silver",
            "description"  : "Là phiên bản kỉ niệm của Apple nhân dịp 10 năm ra đời iPhone đầu tiên, iPhone X đã chính thức ra mắt vào ngày 12/9 với nhiều tính năng đột phá như màn hình tai thỏ Super Retina cực mỏng, nhận diện khuôn mặt Face ID, sạc pin nhanh hay sạc không dây cao cấp",
            "price" : "29.990.000₫"
        },
        {
            "id" : 3,
            "image" : "images/iphone-8-plus-256gb-red-400x460.png",
            "title" : "Điện thoại iPhone 8 Plus 256GB",
            "description"  : "iPhone 8 Plus là bản nâng cấp nhẹ của chiếc iPhone 7 Plus đã ra mắt trước đó với cấu hình mạnh mẽ cùng camera có nhiều cải tiến.",
            "price" : "25.790.000₫"
        },
        {
            "id" : 4,
            "image" : "images/iphone-7-plus-128gb-de-400x460.png",
            "title" : "Điện thoại iPhone 7 Plus 128GB",
            "description"  : "Với thiết kế không quá nhiều thay đổi, vẫn bảo tồn vẻ đẹp truyền thống từ thời iPhone 6 Plus, iPhone 7 Plus được trang bị nhiều nâng cấp đáng giá như camera kép cùng cấu hình cực mạnh.",
            "price" : "19.990.000₫"
        },
        {
            "id" : 5,
            "image" : "images/iphone-8-64gb-1-400x460-1-400x460.png",
            "title" : "Điện thoại iPhone 8 64GB",
            "description"  : "iPhone 8 64GB nổi bật với điểm nhấn mặt lưng kính và mặt trước giữ nguyên thiết kế như iPhone 7, cùng với đó là hàng loạt công nghệ đáng mong đợi như sạc nhanh, không dây hay hỗ trợ thực tế ảo AR.",
            "price" : "17.990.000₫"
        },
        {
            "id" : 6,
            "image" : "images/iphone-6s-plus-32gb-400x450-400x450.png",
            "title" : "Điện thoại iPhone 6s Plus 32GB",
            "description"  : "iPhone 6s Plus 32 GB là phiên bản nâng cấp hoàn hảo từ iPhone 6 Plus với nhiều tính năng mới hấp dẫn.",
            "price" : "10.990.000₫"
        }
];

function getProductList(product) {
    var items = '';
    for (var i = 0 ; i < product.length; i++) { 
      items += '<ul class="product-sub-list">'
                + '<li><img src="' + product[i]["image"] + '" alt=""></li>'
                + '<li class="product-title">' + product[i]["title"] + '</li>'                    
                + '<li class="product-description">' + product[i]["description"] + '</li>'                  
                + '<li class="product-price">' + product[i]["price"] + '</li>'
                + '<li><button id="' + product[i]["id"] + '" onclick="addToCart(this.id)">Add to cart</button></li>'
                + '</ul>';
    }
    return items;
}

document.getElementById('product-item').innerHTML = getProductList(product);

//Create cart product
var cart= [];
function addToCart(id) {
    var id = document.getElementById(id).id;
    for (var i = 0 ; i <= product.length; i++) { 
        if (id == i) {
            var productId = product[id - 1];
        }
    }
    // var qty = 1;
    cart = JSON.stringify(productId);
    localStorage.setItem('cart', cart);
}
  