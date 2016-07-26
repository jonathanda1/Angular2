console.log("data.js loaded");

// Dramatis Personae
var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Strider",
  "Boromir",
  "Gimli"
];

var lands = [
  "The Shire",
  "Rivendell",
  "Mordor"
];

var nazgulScreech = function (){
  // jQuery doesn't have a play() method, so vanilla js it is!
  document.querySelector("#nazgul-screech").play();

  // Also console.log, so you can test without annoying everyone.
  console.log("Nazgul: KHRAAAAAAAAAA!");
}

//PART 1

var makeMiddleEarth = function() {
  $('body').append($('<section id="middle-earth"></section>'))

  for (var i =0; i < lands.length; i++)
  $('#middle-earth').append($("<article class='land'><h1>" +lands[i]+ "</h1></article>"))
}
makeMiddleEarth();

setTimeout(makeHobbits,2000);


var makeHobbits = function() {
  $('.land').eq(0).append($("<ul id='hobbits'></ul>"))
  for (var i = 0; i < hobbits.length; i++)
  $('#hobbits').eq(0).append($("<li class='hobbit'>" + hobbits[i] +"</li>"))
}

makeHobbits();

//PART 2

var keepItSecretKeepItSafe = function() {
  $('li').eq(0).append($("<div id='the-ring' class='magic-imbued-jewelry'></div>"))
}

keepItSecretKeepItSafe();

var makeBuddies = function() {
  var asideTag = $("<aside><ul id='buddies'></ul></aside>")
  for (var i = 0; i < buddies.length; i++) {
    asideTag.append($("<li class='buddy'>" + buddies[i] + "</li>"))
  }
$('.land').eq(1).append(asideTag)
}

makeBuddies();

var beautifulStranger = function() {
  $('.buddy').eq(2).text('Aragorn')
  $('.buddy').eq(2).css("color","green")
}

beautifulStranger();

var leaveTheShire = function() {
   $('.land').eq(1).append($('#hobbits'))
}

leaveTheShire();

