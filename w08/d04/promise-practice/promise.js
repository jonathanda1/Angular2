var rp = require('request-promise')


// rp({
//   method: "POST",
//   uri: "http://jsonplaceholder.typicode.com/posts",
//   body: {
//     userId: 1,
//     title: "Chips Ahoy",
//     body: "too many cookies"
//   },
//   json: true
// })
// .then(response => console.log(response))
// .catch(err => console.log(err))

// var post1 = rp("http://jsonplaceholder.typicode.com/posts/1")
// var post2 = rp("http://jsonplaceholder.typicode.com/posts/2")

// // Promise.all([post1,post2]).then(posts => console.log(posts))
// //   .catch(err => console.log("error"))

// Promise.race([post1,post2]).then(post => console.log(post))
//   .catch(err => console.log("error"))

var post1 = rp("http://google.com")
var post2 = rp("http://facebook.com")

// Promise.all([post1,post2]).then(posts => console.log(posts[1].indexOf("Facebook")))
//   .catch(err => console.log("error"))

Promise.race([post1,post2]).then(post => {
  if (post.indexOf("Facebook") == 581)
      console.log("Facebook")
    else
      console.log("Google")
  })
  .catch(err => console.log("error"))


