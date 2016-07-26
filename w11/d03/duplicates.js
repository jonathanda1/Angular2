arr = [1,2,3,4,5,6]
console.log("arr = " + arr)

console.log("first loop starting ***************")
for(var i = 0; i < arr.length; i++) {
    console.log("i = " + i)
    console.log("nested loop starting -----------------")
    for (var j = i+1; j < arr.length; j++ ) {
        console.log("j = " + j)
        console.log("checking if " + arr[i] + " == " + arr[j])
        console.log(arr[i] == arr[j])
    }
    console.log("nested loop ended ---------")
}
