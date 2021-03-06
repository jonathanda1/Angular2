# Rocky's Function Summit - Part 1

![Rocky](http://www.changesinlongitude.com/wp-content/uploads/2011/08/rocky-movie-on-steps.jpg)

## Javascript Functions & Methods Practice

Similar to Rocky's summit to the top of the Philidelphia Museum of Art, here are a set of code challenges for you to train on.

---

### Turn array into string

- Make a function `arrayToString` that changes an array of numbers (`numbers`)

  into a string

Examples:

`arrayToString([4,3,5,3,2,3]);` should return "435323"

###### Starter Code:

``` javascript

var array = [1,2,3,4]
var arrayToString = function(numbers) {
  var string = "";
  for (var i = 0; i < numbers.length; i++) {
    string = string + array[i]
  } return string;
}

var string;
while (numbers.length > 0) {           //while the length of array > 0,
  string += numbers.shiftToString();   //shift moves each number one by one in the array into var string
 }
  return string;
}


```

---

### Alphabetize

- Create a function `alphabetize` that alphabetizes an array of strings called

  `words`.

Examples:

- `alphabetize(["Carl Weathers", "apple", "Zardoz"]);` should return

  `["apple", "Carl Weathers", "Zardoz"]`

###### Starter Code:

``` javascript
var words = ["ant", "bat", "cat", "dog", "elephant"];

var alphabetize = function(words) {
    return words.sort(funcion(a,b) {
      if (a.toLowerCase().replace(\s/g,'') < b.toLowerCase().replace(/\s/g, ''))
        return -1;
      else return 1;
    })


   // \s/g, '' : look for a space globally and replace spaces with a string
```

---

### Bug: Why can't I push my object into an array?

Solve this bug:

###### Starter Code:

``` javascript
items = [];
items.push {a: "b", c: "d"};
```
syntax error: items.push({a: "b", c: "d"});
---

### Love Letters

Maid Marian has written a function that returns a greeting for a user.

However, she's in love with Robin Hood, and would like to greet him with a

secret message of love. Can you help her?

- Write a function that accepts a string `name`.

- If `name` is equal to `"Robin Hood"` return `"Hi papi! :^*"`

- Otherwise greet the person by name

  - eg: if `name` is `"Burt Reynolds"`, your function should return

    `"Hello Burt Reynolds."`

###### Starter Code:

``` javascript

function greet (name) {
    if (name = "Robin Hood") {
        return "Hi papi! :^*"
    }
    else {
        return "Hello " + name;
    }
}
```

---

### Sum it Up

- Write a program that finds the summation of every number between 1 and num.
- Assume the number will always be a positive integer greater than 0.

Examples:

`sumItUp(2)` should return `3` because 1 + 2 = 3

`sumItUp(5)` should return `15` because 1 + 2 + 3 + 4 + 5 = 15

###### Starter Code:

``` javascript
var sumItUp = function(num) {
  var sumItUp = 0;
  for (var i = 0; i < num; i++)
  sumItUp = i + sumItUp
  }
  return sumItUp;
}

var sumItup = function(num) {
  for (var i = num-1 i > 0l i--) num += i;
    return num;
}
```

---

### Vowelator

Create a function called `vowelator` to remove all the _lowercase_ vowels in a

given string.

Examples:

- `vowelator("Marcus")` should return `"Mrcs"`
- `vowelator("apple")` should return `"ppl"`
- `vowelator("Antwoord")` should return `"Antwrd"`

###### Starter Code:

``` javascript
function shortcut(string){
  return string.replace(/[aeiou]/g,'')} //looks for the vowels and replaces them with a emptystring
}                                        //g GLOBAL SEARCH
```
