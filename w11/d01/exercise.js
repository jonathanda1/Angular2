// 1. Write a function that returns a boolean indicatig whether or not an array contains duplicates.

// loop twice through array
// use brute force to match every element combination

// function hasDuplicates (arr) {

//   newArr = arr
//   for (var i = 0; i < arr.length; i++)
//   for (var j = 0; i < newArr.length; i++) {
//     if (arr[i] === newArr[j]) {

//     }
//   }
//   }


// console.assert(hasDuplicates([2,3,4,2]))
// console.assert(!hasDuplicates([1,3,4,2]))


// 2. Puzzle: You have 2 supposedly unbreakable light bulbs and a 100-floor building. Using fewest possible drops, determine how much of an impact this type of light bulb can withstand. (i.e. it can withstand a drop from 17th floor, but breaks from the 18th).

function impact () {
  var floorBreak = Math.floor(Math.random() * 100) + 1;

}
