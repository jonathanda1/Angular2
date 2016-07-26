// Load express
var express = require('express');
// tells node where to look
var path = require('path');

// Create our express app
var app = express();

// Configure the app (app.set) -- specificing engine to view
app.set('view engine', 'ejs');
// telling Express where views can be found
app.set('views', path.join(__dirname, 'views'));

app.locals.title = 'First Express';
app.locals.todos = [
    {todo: 'Feed dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Have fun', done: true}
  ];

// Use middleware (app.use)
// Be sure to mount before routes
app.use((req, res, next) => {
  console.log(req.headers['user-agent']);
  next();
});


app.get('/todos', (req, res) => res.render('todos/index'));

app.post('/todos', (req, res) => {
  app.locals.todos.push({
    todo: req.body.newTodo,
    done: false
  });
  res.render('todos/index');
});



// render home.ejs template
app.get('/', (req, res) => res.render('home'));

// goodbye
app.get('/goodbye', (req, res) => res.send('<h1>Goodbye World</h1>'));

//goodbye params
app.get('/goodbye/:name', (req, res) => res.send('Goodbye ' + req.params.name));



// Tell the app to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));


