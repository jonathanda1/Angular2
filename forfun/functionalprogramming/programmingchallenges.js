// Reversing a string
function reverseString(str) {
  var Array = str.split("");
  var revArray = Array.reverse();
  var newStr = revArray.join("");
  return newStr;
}

reverseString("hello");

// A number's factorial
function factorialize(num) {
  if (num == 0) {
    return 1
  } else {
    return (num * factorialize(num - 1))
  }
}

// factorialize(5);

// Palindrome check
function palindrome(str) {
  var newStr = str.split("").reverse().join("");
  console.log(newStr)
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("five|\_/|four");



