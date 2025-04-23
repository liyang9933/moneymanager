const express = require('express');
const transactionController = require('../controllers/transactionController');
const mediaTypeValidator = require('../middleware/mediaTypeValidator');
const router = express.Router();

router.get('/', transactionController.getAll);
router.get('/:id', transactionController.get);
router.post('/', mediaTypeValidator, transactionController.create);
router.put('/:id', mediaTypeValidator, transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;