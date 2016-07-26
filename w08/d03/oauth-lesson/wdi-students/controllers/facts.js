var Student = require('../models/student');


module.exports = {
  create: create,
  delete: destroy
};


function create(req, res) {
  console.log(req.body);
  var fact = req.body.fact;
  var student = req.user;
  student.facts.push({text: fact})
  student.save(function(err) {
    if (err) console.log(err)
    res.json(student);
  })
};

// function del(req, res) {
//   console.log(req.body)
//   var fact = req.body.fact;
//   var student = req.user;
//   student.facts.delete({_id: id})
// }

function destroy(req, res) {
  // console.log(req.body)
  var student = Student.userId
  console.log(student)
  // var id = req.body.fact
  student.facts.delete({_id: req.params.id})
}


