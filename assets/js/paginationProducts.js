// Paginacija na our products stranici

var ProductsEyes = [
    {
        "img":"eyes_01.jpg",
        "title":"EYESHADOW",
        "price":"$18.25",
        "desc":"A well-edited palette featuring a colour wave of amber hues.",
        "reviews":"Reviews (12)",
        "type":"eyes"
    },
    {
        "img":"eyes_02.jpg",
        "title":"MASCARA",
        "price":"$12.50",
        "desc":"A carbon black mascara with a large molded brush that creates extreme volume and curl.",
        "reviews":"Reviews (72)",
        "type":"eyes"
    },
    {
        "img":"eyes_03.jpg",
        "title":"EYESHADOW",
        "price":"$75.50",
        "desc":"A limited-edition Eye Shadow palette featuring 25 holiday-exclusive shadows in one mega-mesmerizing palette.",
        "reviews":"Reviews (72)",
        "type":"eyes"
    }
]

var ProductsLips = [
    {
        "img":"lips_03.jpg",
        "title":"LIPGLOSS",
        "price":"$15.50",
        "desc":"A lip finish that fuses the creamy texture of a lipstick with the high shine of a gloss.",
        "reviews":"Reviews (36)",
        "type":"lips"
    },
    {
        "img":"lips_01.jpg",
        "title":"LIPSTICK",
        "price":"$12.50",
        "desc":"A lightweight, raspberry seed- and organic extra-virgin olive oil-infused lipstick that delivers sheer and shiny colour with a long-wearing, lustrous finish.",
        "reviews":"Reviews (36)",
        "type":"lips"
    },
    {
        "img":"lips_02.jpg",
        "title":"SATIN LIPSTICK",
        "price":"$24.60",
        "desc":"A creamy Lipstick formula with a soft cushiony feel, medium-to-full buildable coverage and a satin finish.",
        "reviews":"Reviews (48)",
        "type":"lips"
    },

]

var ProductsFace = [
    {
        "img":"face_01.jpg",
        "title":"HIGHLIGHTER",
        "price":"$16.75",
        "desc":"A luxurious powder with Multi-Mineral Complex that adds highlights to the face and body.",
        "reviews":"Reviews (24)",
        "type":"face"
    },
    {
        "img":"face_03.jpg",
        "title":"FOUNDATION",
        "price":"$18.75",
        "desc":"A modern lightweight, natural matte foundation with shine-controlling, medium-to-full buildable coverage and 24-hour wear",
        "reviews":"Reviews (60)",
        "type":"face"
    },
    {
        "img":"face_02.jpg",
        "title":"BRONZING POWDER",
        "price":"$18.75",
        "desc":"A powder that gives skin sheer, natural colour and bronzes the face.",
        "reviews":"Reviews (60)",
        "type":"face"
    },
    {
        "img":"face_04.jpg",
        "title":"POWDER BLUSH",
        "price":"$18.25",
        "desc":"A blush that provides fantastic colour with ease and consistency.",
        "reviews":"Reviews (12)",
        "type":"face"
    }
]
var Products = [...ProductsEyes, ...ProductsFace, ...ProductsLips]

function ProductsTemplate(data) {
    var result = "";
    data.forEach(element => {
       result+= `<div class="col-lg-4 col-md-4 all ${element.type}">
    <div class="product-item">
      <a href="products.html"><img src="assets/img/products/${element.img}" alt="eye product"></a>
      <div class="down-content">
        <h4>${element.title}</h4>
        <h6>${element.price}</h6>
        <p>${element.desc}</p>
        <ul class="stars">
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
          <li><i class="fa fa-star"></i></li>
        </ul>
        <span>${element.reviews}</span>
      </div>
    </div>
  </div>`
    });
    return result;
}

function paginateData(dataSource) {
    $('#paginationNum').pagination({
        dataSource: dataSource,
        pageSize: 6,
        callback: function(data, pagination) {
            var html = ProductsTemplate(data);
            $('#productsList').html(html);
        }
    });
}

 paginateData(Products);

$('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
      
      var data = $(this).attr('data-filter');
      switch(data){
      case 'eyes':
         paginateData(ProductsEyes);
            break;
        case 'lips':
         paginateData(ProductsLips);
            break;
        case 'face':
         paginateData(ProductsFace);
            break;
        default:
         paginateData(Products);
    }
    });
