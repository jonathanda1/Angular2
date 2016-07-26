var request = require('request');
var bodyParser = require('body-parser');
dotenv = require('dotenv');


var cities = [
{city: "Los_Angeles", state: "CA"},
{city: "Toronto",     state: "Canada"},
{city: "San_Antonio", state: "TX"},
{city: "Cleveland",   state: "OH"},
{city: "Honolulu",    state: "HI"}
]


function printTemperature(city,state) {
var str = 'http://api.wunderground.com/api/991655fff65ffb9a/conditions/q/' + state + '/' + city + '.json'
request(str, function (err, res, body) {
  if (!err && res.statusCode == 200) {
    var temp = JSON.parse(body)
    console.log("THE CURRENT TEMPERATURE IN " + city + " IS: " + temp.current_observation.temperature_string);
  }
});
}


function citiesTemperature () {
  for (var i = 0; i < cities.length; i++) {
    printTemperature(cities[i].city, cities[i].state);
  }
};


module.exports = {citiesTemperature: citiesTemperature}
