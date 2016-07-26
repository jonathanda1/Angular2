// main.js

var dow = require('./utilities/days-of-week');

// Outputs the weekdays array
console.log(dow.weekdays);

// Outputs "Fr"
console.log(dow.getWeekday(5));

// Outputs random number
var random = require('./utilities/random');
for (var i = 0; i < 10; i++) {
    console.log( random(100, 200) );
}


// Outputs circle dimensions
var circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...

// Don't specify path when module is in node_modules
var request = require('request');
request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    console.log(body);
});
