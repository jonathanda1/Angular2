module.exports = function random(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

