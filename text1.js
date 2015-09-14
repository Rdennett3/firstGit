function updateHeader(){
    var newHeader=document.getElementById("mytextbox").value;
    var greeting= ("hello there ")
    var oldHeader= document.getElementById("header");
    oldHeader.innerHTML= greeting.concat(newHeader);

}
    
