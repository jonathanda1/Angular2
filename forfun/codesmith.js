// console.log('Hello, world!');

// function createFunction() {
//   return function hello() {
//     console.log("hello");
//   }
// }

// // UNCOMMENT THESE TO TEST YOUR WORK!
// var function1 = createFunction();
// function1();

// function createFunctionPrinter(input) {
//   return function printSample () {
//     console.log(input)
//   }
// }

// // UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();

// function outer() {
//   var counter = 0; // this variable is outside incrementCounter's scope
//   function incrementCounter () {
//     counter ++;
//     console.log('counter', counter);
//   }
//   return incrementCounter;
// }

// var willCounter = outer();
// var jasCounter = outer();

// // Uncomment each of these lines one by one.
// // Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return x + 2
}

var addByTwo = addByX(2);

// now call addByTwo with an input of 1
addByX(1);

// now call addByTwo with an input of 2
addByX(2);
