var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Mug = require('../models/mugs');
var Printer = require('../models/printers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//////////////MUGS

      //GET - DISPLAY ALL
router.get('/mug', (req, res, next) => {
  Mug.find({}, (err, data) => {
    if (err) console.log(err)
    res.json(data)
  })
});

      //POST - CREATE NEW
router.post('/mug', (req, res, next) => {
  var mug = new Mug ({
    color: req.body.color,
    material: req.body.material,
    volume: req.body.volume,
    handle: req.body.handle,
  })
  mug.save(err => {
  res.send('Mug created!');
  })
});

      //PUT - UPDATE SPECIFIC MUG
router.put('/mug/:id', (req, res, next) => {
  Mug.findOneAndUpdate({_id: req.params.id}, {material: 'pink'}, (err, data) => {
    if (err) console.log(err)
    res.json(data)
  })
});

      //DELETE - DELETE SPECIFIC MUG
router.delete('/mug/:id', (req, res, next) => {
  Mug.findOneAndRemove({_id: req.params.id}, (err, data) => {
    if (err) console.log(err)
    res.json(data)
  })
});

// router.delete('/mug/:id', MugsController.delete);
//         ^ this belongs in config/routes.js
//              +
// function delete(res, res, next) {
//   var id = req.params.id
//   Mug.findOneAndRemove({_id: req.params.id}), (err, data) => {
//     if (err) console.log(err)
//       res.json(data)
//   }
// };
//          ^ this belongs in controllers/mug.js
//         Also must include this in module.exports
//         ex. module.exports = {delete: delete}



////////////////PRINTERS

router.get('/printer', (req, res, next) => {
  Printer.find({}, (err,data) => {
    if (err) console.log(err)
    res.json(data)
  })
})

router.post('/printer', (req, res, next) => {
  var Printer = new Printer ({
    black: req.body.black,
    date_purchased: req.body.date_purchased,
    info: {
      ink_type: req.body.ink_type,
      model_number: req.body.model_number,
      scanner: req.body.scanner,
      photo_printing: req.body.photo_printing,
          },
    lifespan: req.body.lifespan,
    life: req.body.life
  })
    onePrinter.save(err => {
      res.send('Printer created!')
    })
});



module.exports = router;
