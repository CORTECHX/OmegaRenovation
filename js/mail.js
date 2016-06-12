function sendEmail(){

var from=document.getElementsByClassName("from")[0].innerHTML;
var subject=document.getElementsByClassName("subject")[0].innerHTML;
var body=document.getElementsByClassName("body")[0].innerHTML;

window.open("mailto:service@omegarenovation.ca?subject="+subject+
"&body="+body);

}
