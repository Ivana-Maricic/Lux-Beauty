

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


function validation(e){
    e.preventDefault();
    
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
if (successfullValidation){
    document.getElementById('contact').reset();
    document.getElementById('form-popup').style.display = 'block';
}
return false;
}
document.getElementById('popup-close').onclick = function(){
document.getElementById('form-popup').style.display = 'none';
  };



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
        <a href="" target="_blank">
            <span><i class="far fa-file"></i></span>
        </a>
          </div>
    <div class="col-12 col-md-6 inner-content">
        <p>Copyright &copy; 2020 <a class="font-weight-bold"href="index.html"> Lux Beauty</a></p>
    </div>
    </div></div>`;
footer.innerHTML=content;



