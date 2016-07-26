module.exports.fives = function () {
 var fives = [];
 for (var i = 1; i <= 100; i++) {
  if (i%5 === 0) {
    fives.push(i);
  }
 }
  return fives;
};

exports.myNumber = 123;
