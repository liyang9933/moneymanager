const express = require('express');
const categoryController = require('../controllers/categoryController');
const mediaTypeValidator = require('../middleware/mediaTypeValidator');

const router = express.Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.get);
router.post('/', mediaTypeValidator, categoryController.create);
router.put('/:id', mediaTypeValidator, categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;