const express = require('express');
const budgetController = require('../controllers/budgetController');
const mediaTypeValidator = require('../middleware/mediaTypeValidator');
const router = express.Router();

router.get('/', budgetController.getAll);
router.get('/:id', budgetController.get);
router.post('/', mediaTypeValidator, budgetController.create);
router.put('/:id', mediaTypeValidator, budgetController.update);
router.delete('/:id', budgetController.delete);

module.exports = router;