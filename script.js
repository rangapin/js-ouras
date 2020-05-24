function startTime() {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var ampm = "";
  m = checkTime(m);

  if (h > 12) {
      h = h - 12;
      ampm = " PM";
  } else if (h == 12){
      h = 12;
      ampm = " AM";
  } else if (h < 12){
      ampm = " AM";
  } else {
      ampm = "PM";
  };

if(h==0) {
  h=12;
}
  
  document.getElementById('display').innerHTML = h+":"+m+ampm;
  var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
  if (i<10) {i = "0" + i}; 
  return i;
}

function startDate() {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
}

var quotes = ["",
  "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>",
  "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
  "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
  "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
  "\"If you can dream it, you can do it.\"<br>- Walt Disney",
  "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
  "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",
  "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- Bruce Lee",
];

function genQuote() {
  var quote = document.getElementById("quote");
  var generate = document.getElementById("gen");
  generate.addEventListener("click", changeText);
  quote.innerHTML = quotes[0];

  function changeText() {
      var searchTerm = quote.innerHTML;
      var index = quotes.indexOf(searchTerm) + 1;
      if (index == quotes.length) index = 0;
      var result = quotes[index];
      quote.innerHTML = result;
      return;
  }
}

var startTime, endTime;

function start() {
  startTime = performance.now();
};

function end() {
  endTime = performance.now();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;
  
  var seconds = Math.round(timeDiff);  
  var minutes = Math.round(seconds / 60);
  document.getElementById("quote").innerHTML = ("You have read for:" + " " + minutes + " minutes" + " " +  seconds + " seconds");
  // setTimeout(function(){ location.reload(); ;}, 5000);
  readingTime =   document.getElementById("quote").innerHTML;
  
}

function report() {
  readingReport = [];
  for (i=0; i < readingReport.length; i++) {
    readingReport.push(readingTime);
    document.getElementById("content").innerHTML = ("<ol>" + readingReport + "</ol>");
     };
}
report();

