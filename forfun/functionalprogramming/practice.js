function nextInLine(arr, item) {
  arr.push(item);
  var firstItem = arr.shift();
  console.log(firstItem)
  return firstItem;
}

// Test Setup
nextInLine([1,2,3,4,5],6);
