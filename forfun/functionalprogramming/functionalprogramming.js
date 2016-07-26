
// JAVASCRIPT MAP FUNCTION
var animals =
[{name:"Jon", species:"Human"},
 {name:"Bob", species:"Dog"},
 {name:"Julie", species:"Llama"},
 {name:"Jack", species:"Pokemon"},
 {name:"Juan", species:"Cat"},
 {name:"Jose", species:"Human"}
  ]

// map allows you to create a new array with the data you want to grab without looping
  var info = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
  })

  // filter allows you to filter out an array given the return argument
  // You can combine the callback function by declaring it as a variable prior to the filter function and then passing it to shorten the function
            var isHuman = function(animal) {
              return animal.species === "Human"
            }

            // var humans = animals.filter(function(animal) {
            //   return animal.species === "Human"
            // })

  var humans = animals.filter(isHuman)

  console.log(humans)
  console.log(info)

// JAVASCRIPT REDUCE FUNCTION
  var orders = [
  {amount: 250},
  {amount: 350},
  {amount: 500},
  {amount: 760},
  ]

  // reduce function wants to take two arguments. One being the item iterated (order) and one being a starting point (sum)
  // the 0 is the first argument.. the sum
  var totalAmount = orders.reduce(function(sum, order){
    return sum + order.amount
  }, 0)


  console.log(totalAmount)


