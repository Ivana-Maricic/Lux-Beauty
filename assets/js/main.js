

//Dinamicko ispisivanje menija

const hrefLink = ["index.html", "products.html", "about.html", "contact.html"];
const imeLink = ["Home", "Our products", "About us", "Contact Us"];
let navBar = document.getElementById("navbarResponsive");
let navList = `<ul class="navbar-nav ml-auto">`;
    for (let i = 0; i < hrefLink.length; i++) {
        navList += `<li class="nav-item"><a class="nav-link" href="${hrefLink[i]}">${imeLink[i]}</a></li>`;
    }
    navList +=`</ul>`;
navBar.innerHTML = navList;


$('ul.navbar-nav > li').click(function (e) {
                $('ul.navbar-nav > li').removeClass('active');
                $(this).addClass('active');
})

$(function(){
    $('li.nav-item > a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
        }
    });
});



// Validacija forme


function validation(){
    
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;
var gender = document.getElementsByName('gender');
var successfullValidation = true;

var nameCheck = /^[A-Za-z. ]{3,30}$/;
var emailCheck = /^[\w\d][\w\d\_\-\.]{2,40}\@[a-z]{2,10}(\.[a-z]{2,3})+$/;
var subjectCheck = /.{3,50}/;
var messageCheck = /.{3,250}/;


if(nameCheck.test(name)){
    document.getElementById('nameerror').innerHTML = " ";
}else{
    document.getElementById('nameerror').innerHTML = "** Name is invalid ";
    successfullValidation = false;
}

if(emailCheck.test(email)){
    document.getElementById('emailerror').innerHTML = " ";
}else{
    document.getElementById('emailerror').innerHTML = "** Email is invalid ";
    successfullValidation = false;
}

if(subjectCheck.test(subject)){
    document.getElementById('subjecterror').innerHTML = " ";
}else{
    document.getElementById('subjecterror').innerHTML = "** Subject is invalid ";
    successfullValidation = false;

}

if(messageCheck.test(message)){
    document.getElementById('messageerror').innerHTML = " ";
}else{
    document.getElementById('messageerror').innerHTML = "** Message is invalid ";
    successfullValidation = false;

}




if ( ( gender[0].checked == false ) && ( gender[1].checked == false ) && ( gender[2].checked == false ) )
{
     document.getElementById('gendererror').innerHTML = "** Choose one option ";
     successfullValidation = false;
}
else{
    document.getElementById('gendererror').innerHTML = " ";
}
return successfullValidation;
}


// Footer

var footer=document.getElementById('footer');
var content = `<div class="container-fluid">
<div class="row justify-content-around">
    <div class="col-12 col-md-6 inner-content">
        <a href="https://www.facebook.com/" target="_blank">
            <span><i class="fab fa-facebook-f mr-3"></i></span>
        </a>
        <a href="https://www.instagram.com/" target="_blank">  
            <span><i class="fab fa-instagram mr-3"></i></span>
        </a>
        <a href="https://twitter.com/" target="_blank">
            <span><i class="fab fa-twitter mr-3"></i></span>
        </a>
        <a href="../xml/sitemap.xml" target="_blank">
            <span><i class="fas fa-sitemap mr-3"></i></span>
        </a>
        <a href="../xml/rss.xml" target="_blank">
            <span><i class="fas fa-rss mr-3"></i></span>
        </a>
        <a href="" target="_blank">
            <span><i class="far fa-file"></i></span>
        </a>
          </div>
    <div class="col-12 col-md-6 inner-content">
        <p>Copyright &copy; 2020 <a class="font-weight-bold"href="index.html"> Lux Beauty</a></p>
    </div>
    </div></div>`;
footer.innerHTML=content;


// Pagination
var ProductsEyes = [
    {
        "img":"eyes_01.jpg",
        "title":"EYESHADOW PALLETE",
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
        "title":"MINERALIZE SKINFINISH",
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
      <a href="#"><img src="assets/img/products/${element.img}" alt="eye product"></a>
      <div class="down-content">
        <a href="#"><h4>${element.title}</h4></a>
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
