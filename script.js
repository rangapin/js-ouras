var i = 0;
var txt = '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea similique voluptates? Voluptates veniam aperiam vitae quis, numquam id quia inventore exercitationem nulla sit. Dicta dolore dignissimos laboriosam maxime architecto!"'; /* The text */
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =  minutes + " minutes " + seconds + " secondes ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
