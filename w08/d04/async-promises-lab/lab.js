// Run npm install first to install request-promise

var rp = require('request-promise')

// 1. Print "Question 1:" to the console 2 seconds after the script executes

// setTimeout(console.log("Question 1:"), 2000)

// 2. Print out a countdown that starts at 10 and counts down to 0, printing out one number every second. RESOURCE: Carlos B and Marcos should know how to do this...

// var count = 11

// var counter = setInterval(timer, 1000)

// function timer () {
//   count = count - 1
//   if (count <= 0) {
//     clearInterval(counter);
//   }
//   console.log(count)
// }

// 3. Get the first 2 posts from http://jsonplaceholder.typicode.com/ and print them out simultaneously when both of the promises resolve. Make sure you catch any errors

var post1 = rp("http://jsonplaceholder.typicode.com/posts/1")
var post2 = rp("http://jsonplaceholder.typicode.com/posts/2")
var post3 = rp("http://jsonplaceholder.typicode.com/posts/3")

// Promise.all([post1,post2]).then(posts => console.log(posts))
//   .catch(err => console.log("error"))

// 4. Get the first 3 posts from http://jsonplaceholder.typicode.com/ and print out only the one that returns first

// Promise.race([post1,post2,post3]).then(post => console.log(post))
//   .catch(err => console.log("error"))

// CHALLENGE: Use a loop to get the first 15 posts from http://jsonplaceholder.typicode.com/ and print out all 15 simultaneously when the all the promises have resolved. Make sure you catch any errors
console.log('hi')

  for (var i = 1; i < 16; i++)
   { var link = rp("http://jsonplaceholder.typicode.com/posts/"  + i)



Promise.all([link]).then(links => console.log(links))
  .catch(err => console.log("error"))



}


// function print () {
// for (var i = 0; i > 16; i++)
// Promise.all([post[i]]).then(posts => console.log(posts))
//   .catch(err => console.log("error"))
// }


