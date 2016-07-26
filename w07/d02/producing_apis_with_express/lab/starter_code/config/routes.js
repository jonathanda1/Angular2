var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController    =  require('../controllers/welcome');
var facepaintsController =  require('../controllers/facepaints');

// root path:
router.get('/', welcomeController.index);

//facepaint resource
router.get('/facepaints',      facepaintsController.index);
router.get('/facepaints/:id',  facepaintsController.show);
router.post('/facepaints',     facepaintsController.create);
router.put('/facepaints/:id',  facepaintsController.update);

module.exports = router;
