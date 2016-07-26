console.log("here")

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
function maxofThree(a,b,c) {
  if (a>=b && a>=c) {
    return a;
  }
  else if (b>=a && b>=c) {
    return b;
  }
  else if (c>=a && c>=b) {
    return c;
  }
}

console.log(maxofThree(9,9,3));

//3.
function isCharAVowel(char) {
 if (char.toLowerCase()==="a" || char.toLowerCase()==="e" || char.toLowerCase()==="i" || char.toLowerCase==="o" || char.toLowerCase==="u") {
    return "true";
 }  else {
    return "false";
 }
}

 console.log(isCharAVowel("z"));

 //4.
function sumArray(array) {
  var sum=0;
  for (var i=0; i<array.length ; i++) {
    sum=sum+array[i]
  }
  return sum;
}

  console.log(sumArray([1,2,5]))

  //5.
  function multiplyArray(array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
      sum=sum*array[i]
    }
    return sum;
  }

  console.log(multiplyArray([5,4,2]))

  //6.
  function numArgs() {
    return arguments.length
}
  console.log(numArgs("dog",1,3,false))

  //7.
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
    console.log(reverseString("racecar"))

  //8.
  function longestWordLength(long) {
    var longestWord=""
    for (var i = 0; i<long.length; i++) {
      if (longestWord.length < long[i].length) {
        longestWord = long[i];
      }
    }
      return longestWord.length
}
  console.log(longestWordLength(['dog','hippo','rhinoceros']))

//9.
function stringsLongerThan(stringArr, num){
 var longStrings = []
 for (var i = 0; i < stringArr.length; i++){
   if(stringArr[i].length > num)
     longStrings.push(stringArr[i])
 }

 return longStrings
}

console.log(stringsLongerThan(["o", "two", "apple", "orange", "1234"], 3));





