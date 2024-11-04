var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

  
router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:id', contactsController.contactGet, contactsController.contactsByID);
router.put('/:id', contactsController.update);
router.delete('/:id', contactsController.remove);

module.exports = router;