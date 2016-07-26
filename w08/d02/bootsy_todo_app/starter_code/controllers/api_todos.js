var Todo = require('../models/todo')

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update
}


function index (req, res, next) {
  Todo.find({}, function(err,todos) {
    if (err) {
      res.send(err);
    } else {
      res.json(todos)
    }
  })
}

// mongoose version
function create(req, res, next) {
  var newTodo = new Todo(req.body);
  newTodo.save(function(err,savedTodo) {
    if (err) next(err);
    res.json(savedTodo)
  })
};

function destroy(req, res, next) {
  var id = req.params.id
  Todo.remove({"_id": id}, function(err) {
    if (err) {
      res.send(err)
    } else
    console.log("Todo has been deleted")
    res.json({message: 'Todo has been deleted'})
  })
};

function update(req, res, next) {
  var id = req.params.id
  Todo.findById(id, function(err, todo) {
    if (err || !todo) {
      next(err)
    } else {
// Todo.update({_id: id}), req.body, function(err,updatedToDo)
      todo.completed = !todo.completed;
      todo.save(function () {
        if (err) next (err)
        res.json(todo)
      })
    }
  })
};
