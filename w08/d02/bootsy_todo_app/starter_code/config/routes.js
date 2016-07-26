var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');
var todosController = require('../controllers/api_todos');

// root path:
router.get('/',           pagesController.home);
// other paths:
router.get('/about',      pagesController.about);
router.get('/todos',      pagesController.todos);

// API
router.get('/api/todos',        todosController.index);
router.post('/api/todos',       todosController.create);
router.delete('/api/todos/:id', todosController.destroy);
router.put('/api/todos/:id',    todosController.update);

module.exports = router;
