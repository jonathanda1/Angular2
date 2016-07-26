console.log("loaded")

var value = x || o

var turn = 0

function turnCounter () {

}

$(document).on("click", ".button", function(e) {
  console.log("clicked")
  $(".button").html(value)

})

