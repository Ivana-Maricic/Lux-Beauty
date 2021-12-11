

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
        <a href="../../xml/sitemap.xml" target="_blank">
            <span><i class="fas fa-sitemap mr-3"></i></span>
        </a>
        <a href="../../xml/rss.xml" target="_blank">
            <span><i class="fas fa-rss mr-3"></i></span>
        </a>
        <a href="documentation.pdf" target="_blank">
            <span><i class="far fa-file"></i></span>
        </a>
          </div>
    <div class="col-12 col-md-6 inner-content">
        <p>Copyright &copy; 2020 <a class="font-weight-bold"href="index.html"> Lux Beauty</a></p>
    </div>
    </div></div>`;
footer.innerHTML=content;



