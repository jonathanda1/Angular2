var Game = require('../models/game');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Game.find({}, function(err, games) {
    if (err) next(err);

    res.json(games);
  });
}

// function show(req, res, next) {
//   var id = req.params.id;

//   Show.findById(id, function(err, show) {
//     if (err) next(err);

//     res.json(show);
//   });
// }

// function create(req, res, next) {
//   var newShow = new Show(req.body);

//   newShow.save(function(err, savedShow) {
//     if (err) next(err);

//     res.json(savedShow);
//   });

// }

// function update(req, res, next) {
//   var id = req.params.id;

//   Show.findById(id, function(err, show) {
//     if (err) next(err);

//     show.title = req.body.title;
//     show.length = req.body.length;
//     show.source = req.body.source;

//     show.save(function(err, updatedShow) {
//       if (err) next(err);

//       res.json(updatedShow);
//     });

//   });
// }

// function destroy(req, res, next) {
//   var id = req.params.id;
//   Show.remove({_id:id}, function(err) {
//     if (err) next(err);

//     res.json({message: 'Show successfully deleted'});
//   });
// }
