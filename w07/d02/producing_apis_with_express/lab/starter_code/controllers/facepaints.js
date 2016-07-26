var facepaints = require('../data/facepaint_data')

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update
};

function index(req, res, next) {
  if (facepaints) {
    res.json(facepaints);
  } else {
    res.json({err: "Where is the facepaint?"});
  }
};

function show(req, res, next) {
  var id = parseInt(req.params.id);
  var chosenFacepaint = facepaints.find(facepaint => facepaint.id === id);

  if (chosenFacepaint) {
    res.json(chosenFacepaint);
  } else {
    res.json({err:"There is no facepaint here"})
  }
};

function create(req, res, next) {
  var facepaint = req.body;
  var preCount  = facepaints.length;
  facepaint.id  = facepaints.id;
  facepaints.id++
  facepaints.push(facepaint);

  if (facepaints.length > preCount) {
    res.json ({msg: "facepaint added!"});
  } else {
    res.json({err: "Boo"});
  }
};

function update(req, res, next) {
  var updateFacepaint = req.body;
  var id              = parseInt(req.params.id);
  var chosenFacepaint = facepaints.find(facepaint =>facepaint.id);

  if (updateFacepaint.title)      chosenFacepaint.title      = updateFacepaint.title
  if (updateFacepaint.safe4skin)  chosenFacepaint.safe4skin  = updateFacepaint.safe4skin
  if (updateFacepaint.price)      chosenFacepaint.price      = updateFacepaint.price
  if (updateFacepaint.endorsedBy) chosenFacepaint.endorsedBy = updateFacepaint.endorsedBy

  if (chosenFacepaint) {
    res.json({msg: "Updated said facepaint", facepaint: chosenFacepaint})
  } else {
    res.json({err: "facepaint doesn't exist"})
  }
};
