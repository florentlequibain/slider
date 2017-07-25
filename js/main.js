
// ~~~~~~~~~~variables

var precedent = document.getElementById("precedent");
var suivant = document.getElementById("suivant");
var images = document.getElementsByClassName("img");
var x = 0;


 var myVar = setInterval(function(){ boucle() }, 1000);



function boucle(){

  for( i = 0 ; i<images.length ; i++){
    images[i].style.display = "none";
  }

    images[x].style.display = "block";
    x++;

    if(x >= images.length){
      x = 0;
    }
 }


suivant.onclick = function(){
  myStopFunction();
  boucle();
  myVar = setInterval(function(){ boucle() }, 1000);
}


precedent.onclick = function(){
  myStopFunction();
  precedent();
  myVar = setInterval(function(){ boucle() }, 1000);
}

 function myStopFunction() {
    clearInterval(myVar);
}


function precedent(){
  for( i = 0 ; i<images.length ; i++){
    images[i].style.display = "none";
  }
  
  images[x].style.display = "block";
  x--;

  if(x > 0){
    x = 0;
  }
}




// ~~~~~~~~~~~~functions


//défilement auto




// script
