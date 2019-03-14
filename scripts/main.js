//JS van de klok 
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  background();
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  //0 toevoegen voor de nummers < 10
  return i;
}

//achtergrond veranderd mee met de tijd en er zijn 4 tijdzones 
function background () {
	var hours = new Date().getHours();

	if (hours >= 6 && hours < 12) {
		document.body.className = "morning"; //morning.jpeg
		document.getElementById("text").innerHTML = "Goodmorning! Time to shine!"; //text onder de klok 
	}

	else if (hours >= 12 && hours <= 17) { 
		document.body.className = "afternoon"; //afternoon.jpeg
		document.getElementById("text").innerHTML = "Good afternoon! Keep going!";
	}

	else if (hours >= 18 && hours <= 24 ) {
		document.body.className = "evening"; //evening.jpeg
		document.getElementById("text").innerHTML = "Goodnight! Have a good time!";
	}

	else if (hours >= 0 && hours <= 5 ) {
		document.body.className = "night"; //night.jpeg
		document.getElementById("text").innerHTML = "Goodnight! Time to sleep!";
	}
}

//functie voor de animatie 
function animateDay() {
    var hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
    	document.getElementById("sun").style.display = "inline"; //opgaande zon is ingeschakeld
    	document.getElementById("sun2").style.display = "none";	
    	document.getElementById("star").style.display = "none";
    	document.getElementById("moon").style.display = "none";
    }

    else if (hours >= 12 && hours <= 17) {
    	document.getElementById("sun").style.display = "none"; 
    	document.getElementById("sun2").style.display = "inline"; //ondergaande zon is ingeschakeld 
    	document.getElementById("star").style.display = "none";
    	document.getElementById("moon").style.display = "none";
    }

    else if (hours >= 18 && hours <= 24) {
    	document.getElementById("sun").style.display = "none";
    	document.getElementById("sun2").style.display = "none";
    	document.getElementById("star").style.display = "inline"; //ster is ingeschakeld 
    	document.getElementById("moon").style.display = "none";
    }

    else if (hours >= 0 && hours <= 5) {
    	document.getElementById("sun").style.display = "none";
    	document.getElementById("sun2").style.display = "none";
    	document.getElementById("star").style.display = "none"; 
    	document.getElementById("moon").style.display = "inline"; //maan is ingeschakeld 
    }
}

//functie voor de achtergrond
window.onload = function() {
	background();
	startTime();
	animateDay();
}

//Animatie van onderschrift onder de klok 
TweenMax.from("#text", 2, { 
	opacity: 0,
	left:100,
	ease:Bounce.easeOut
});

//Animatie voor de zon 6h-12h 
var sun = document.getElementById('sun');

var tl1 = new TimelineMax ({repeat:-1,});
tl1.from(sun, 5, {top: 200});

//Animatie voor de zon 12h-17h 
var sun2 = document.getElementById('sun2');

var tl1 = new TimelineMax ({repeat:-1,});
tl1.to(sun2, 7, {top: 280, ease: Sine.easeInOut})

//Animatie voor de ster 18h-24h
var star = document.getElementById('star');

var tl1 = new TimelineMax ({repeat: -1,});
tl1.from(star, 5, {left: -300});
tl1.to(star, 5, {right: 400});

TweenMax.from("#star", 6, { 
	opacity: 0,
});

//Animatie voor de maan 0h-5h 
var moon = document.getElementById('moon');

var tl1 = new TimelineMax ({repeat: 0,});
tl1.from(moon, 5, {left: -300});
