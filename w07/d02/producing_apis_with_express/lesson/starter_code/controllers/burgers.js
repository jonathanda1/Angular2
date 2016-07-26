var burgers = require('../data/burger_data');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
};

function index(req, res, next) {
  if (burgers) {
    res.json(burgers);
  } else {
    res.json({err: "Where did all the burgers go!?!?"});
  }
};

function show(req, res, next) {
  // makes burger id an integer
  var id = parseInt(req.params.id);
  // when you find a burger with the id that i gave you, give me the burger
  var chosenBurger = burgers.find(burger => burger.id === id);

  if (chosenBurger) {
    res.json(chosenBurger);
  } else {
    res.json({err: "That burger must have escaped ethis island!"})
  }
};

function create(req, res, next) {
  // #1
  var burger   = req.body;
  var preCount = burgers.length;
  // #2
  burger.id    = burgers.id;
  burgers.id++; // Always prepare the id for the next burger post
  // #3
  burgers.push(burger);
  // #4
  if (burgers.length > preCount) {
    res.json({msg: "Burger added!"});
  } else {
    res.json({err: "Ya burned the bacon!!"});
  }
};

function update(req, res, next) {
  var updateBurger = req.body;
  var id           = parseInt(req.params.id);
  var chosenBurger = burgers.find(burger => burger.id === id);

  if (updateBurger.title)       chosenBurger.title             = updateBurger.title;
  if (updateBurger.ingredients) chosenBurger.ingredients = updateBurger.ingredients;
  if (updateBurger.prince)      chosenBurger.price            = updateBurger.price;

  if (chosenBurger) {
    res.json({msg:"Updated said burger", burger: chosenBurger});
  } else {
    res.json({err: "Burger does not exist!"})
  }
};

function destroy(req, res, next) {
  var id           = parseInt(req.params.id);
  var chosenBurger = burgers.find(burger => burger.id === id);

  var cBIndex      = burgers.indexOf(chosenBurger);

  if (chosenBurger && cBIndex !== undefined) {
    burgers.splice(cBIndex, 1);
    res.json({msg: "Always sad to see a burger go.." , burger: chosenBurger})
  } else {
    res.json({msg: "Why you tryna delete my burgers?"});
  }
};








