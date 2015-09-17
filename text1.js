$(document).ready(function() {

  var count = 1;
  var hockeyTeams=["Boston Bruins", "New York Rangers", "Chicago Blackhawks"];
  var currentTeam=0;
  var badTeams=["a", "b", "c"];
  var lineCounter=100;
  var song1=" bottles of beer on the wall ";
  var song2=" bottles of beer, take one down, pass it around ";
  var tall=["Space Mountain", "Big Thunder Mountain", "Indiana Jones Adventure"];
  var short=["Haunted Mansion", "Jungle Cruise", "Mad Tea Party"];

//  function(string)(
  //  alert("hi");
//)

  function singSong(){
    while ( lineCounter > 0 ){
      lineCounter--;
      $("ul#beer").append("<li>" + lineCounter + song1 + lineCounter + song2 + (lineCounter-1) + song1 +"</li>");

      }
    }

  function listTeams(){
    badTeams.forEach(function(team){
      $("ul#bad-teams").prepend("<li>"+team+"</li>");
      });
    }

function checkHeight(x){
    x=x.toString();
    x=x.split(",");
    var feet=x[0];
    var inches=x[1];
    feet=parseInt(feet);
    inches=parseInt(inches);
    feet=(feet * 12);
    inches=(feet + inches);
    alert(inches);
    displayRides(inches);

}

function displayRides(y){

      short.forEach(function(rides){
        $("ul#height-list").prepend("<li>"+rides+"</li>");
        });
        if (y>40){
          tall.forEach(function(rides){
            $("ul#height-list").prepend("<li>"+rides+"</li>");
            });
        }
}

    $( "button#height-btn" ).click(function() {
        var myHeight=$( "#getHeight" ).val();
        //alert(myHeight);
        checkHeight(myHeight);
    });



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
<<<<<<< Updated upstream
    $("#showing").toggle();
    $("#hidden").toggle();
=======
>>>>>>> Stashed changes
    });


$("button#team-btn").click(function(){

    if(currentTeam < 3){
      $("ul#teams").prepend("<li>"+ hockeyTeams[currentTeam]+"</li>");
      currentTeam++;
    }
    else{
      $("ul#teams").prepend("<li> Rebecca only know three teams. </li>");
    }
    $("ul#teams").children('li').first().click(function() {
      alert('hi');
    });
  });

$("button#array-btn").click(function() {
        listTeams();
      });




$("img#myButton").click(function(){
        alert("You shouldn't have done that");
        singSong()

      });




});






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
