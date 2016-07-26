console.log("hi")

function searchEvents(Artist){
  var baseUri = 'http://api.eventful.com/json/events/search?q=music&category=music'
  var key = '&app_key='+ process.env['EVENTFUL_KEY']
  var searchStr = '&keywords='+Artist
​
  var location = '&location=United+States'
  request(baseUri+key+searchStr+location, function(err, res){
      if(!err && res.statusCode == 200){
      var artistEvents = JSON.parse(body)
    }
  })
}
​
console.log(searchEvents('rihanna'))
