$(document).ready(function() {
  $("button#hello").click(function() {
    $('h1#demo').after('<h2>New subheading</h2>');
    $("ul#user").prepend("<li>Hello! <span class='clickable delete'></span></li>");
    $("ul#webpage").prepend("<li>Why hello there! <span class='clickable delete'></span></li>");
    $('li').click(function() {
      $(this).remove();
    });
      $('h2').click(function(){
        $(this).remove();
    });
  });
  $(".toggle").click(function() {
    $("#showing").fadeToggle("slow");
    $("#hidden").fadeToggle("slow");
    });





});





var count = 1;


function updateHeader(){
    var newHeader=document.getElementById("mytextbox").value;
    var greeting= ("hello there, ");
    var oldHeader= document.getElementById("header");
    var property = document.getElementById("btn");




    if (count == 0) {
        property.style.backgroundColor = "C08F0C"
        count = 1;
    }
    else {
        property.style.backgroundColor = "#867F6C"
        count = 0;
    }
    //alert(newHeader);
    window.confirm("Are you sure you want to do this?");


    oldHeader.innerHTML= greeting.concat(newHeader);
    oldHeader.style.color = "Blue";




}


function convert(){
  var input=document.getElementById("myothertextbox").value;
  var output = (input - 32) * (5 / 9);
  window.alert("The answer is: " + output);
}


function prettyQuot(){
  var x=document.getElementById("num").value;
  var y=document.getElementById("den").value;
  var mod=(x%y);
  var quot;
  quot=(x/y);
  quot=parseInt(quot);
  // quot=quot.toString();
  // decimal=quot.indexOf(".");
  // newquot=quot.substring(0,decimal);
  // if (newquot=="") {
  //   (newquot = quot);
  window.alert(quot + "r" + mod);
}
