var Mug = require('../models/mugs')

module.exports = {

  index: function(req,res,next) {
    Mug.find({}, (err,data) => {
      if (err) console.log(err)
        res.json(data)
    })
  },

  show: function(req,res,next) {
    Mug.findOne({_id:req.params.id}, (err,data) => {
      if (err) console.log(err)
        res.json(data)
    })
  },

  update: function(req,res,next) {
    Mug.findOneAndUpdate({_id:req.params.id},{}, (err,data) => {
      if (err) console.log(err)
        res.json(data)
    })
  },

  new: function(req,res,next) {
    var mug = new Mug ({
      color:   req.body.color,
      material:req.body.material,
      volume:  req.body.volume,
      handle:  req.body.handle
    })
     mug.save(err,data) => {
      if (err) console.log(err)
      res.json(data)
    }
  },

  destroy: function(req,res,next) {
    Mug.findOneAndRemove({_id:req.params.id}, (err,data) => {
      if (err) console.log (err)
        res.json(data)
    })
  }

}
