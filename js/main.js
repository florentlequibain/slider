
// ~~~~~~~~~~variables

var precedent = document.getElementById("precedent");
var suivant = document.getElementById("suivant");
var images = document.getElementsByClassName("img");
var x = 0;

for( i = 0 ; i<images.length ; i++){
  images[i].style.display = "none";
}


setInterval(function(){ x = 1; }, 3000);
setInterval(function(){ x = 1; }, 3000);


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}





// ~~~~~~~~~~~~functions


//défilement auto




// script
