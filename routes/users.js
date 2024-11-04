var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');



router.get('/', usersController.list);
router.post('/', usersController.create);
router.get('/:id', usersController.userGet, usersController.userByID);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.remove);

module.exports = router;