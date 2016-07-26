var Todo = require('../models/todo')


module.exports = {
  home:  home,
  about: about,
  todos: todos
};

function home(req, res, next) {
  res.render('pages/home');
};

function about(req, res, next) {
  Todo.find({}, function(err,todos) {
    res.render('pages/about', {numberOfTodos: todos.length})
  })
};


function todos (req,res,next) {
  res.render('pages/todos');
};
