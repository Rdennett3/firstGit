function updateHeader(){
    var newHeader=document.getElementById("mytextbox").value;
    var greeting= ("hello there ")
    var oldHeader= document.getElementById("header");

    // alert(newHeader);
    window.confirm("Are you sure you want to do this?");
    oldHeader.innerHTML= greeting.concat(newHeader);
    document.getElementById("header").style.color="black"

}


var count = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.backgroundColor = "#FFFFFF"
        count = 1;
    }
    else {
        property.style.backgroundColor = "black"
        count = 0;
    }
}
