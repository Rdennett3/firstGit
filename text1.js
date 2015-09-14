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
