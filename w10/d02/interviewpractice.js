function palindrome (str) {
  if (str.split('').reverse().join('') === str) {
    return true
  } else {
    return false
  }
}

console.log(palindrome("racecar")) //true
console.log(palindrome("hello")) //false
