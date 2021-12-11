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
