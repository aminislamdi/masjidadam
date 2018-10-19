function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var i = 0;
var txt = 'Our Lord, verily we have heard a caller calling to faith, Have faith in your Lord! So we have believed; Our Lord!, so remit our sins and expunge our evil deeds and cause us to die among the righteous. (Quran 3:193)'; 
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


