// Require modules --
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Create our express app
var app = express();

// Configure the app (app.set) -- saying we are using ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// new code below
app.locals.title = 'First Express';
app.locals.todos = [
    {todo: 'Feed dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Have fun', done: true}
  ];


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

  // Use middleware (app.use)
// Be sure to mount before routes
app.use((req, res, next) => {
  console.log(req.headers['user-agent']);
  next();
});


// Define a root route directly on app
// Later, we will use the router object
//app.get('/', (req, res) => res.send('<h1>Hello Express!</h1>'));

// query string
//app.get('/', (req, res) => {
//    var msg = req.query.msg ? req.query.msg : '!';
//    res.send('<h1>Hello Express ' + msg + '</h1>' );
//});

app.get('/', (req, res) => res.render('home'));

// Define a route /goodbye
//app.get('/goodbye', (req, res) => res.send('<h1>Goodbye World</h1>'));


// responding w JSON(API)
app.get('/goodbye', (req, res) => res.json({msg: 'Goodbye World'}));

// Adding a route w/ params
app.get('/goodbye/:name', (req, res) => res.send('Goodbye ' + req.params.name));

app.get('/cars', (req, res) => res.send("Here's a list of my cars..."));

app.post('/cars', (req, res) => res.send('Thanks for the cars!'));

 // get and POST
app.get('/todos', (req, res) => res.render('todos/index'));
app.post('/todos', (req, res) => {
  app.locals.todos.push({
    todo: req.body.newTodo,
    done: false
  });
  res.render('todos/index');
});



// Tell the app to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));






