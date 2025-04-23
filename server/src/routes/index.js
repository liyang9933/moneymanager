const express = require('express');
const transaction = require('./transaction');
const category = require('./category');
const budget = require('./budget');
const authRoutes = require('./authRoutes');
const authMiddleWare = require('../middleware/auth');

const router = express.Router();


router.use('/auth', authRoutes);
router.use(authMiddleWare);
router.use('/transaction', transaction);
router.use('/category', category);
router.use('/budget', budget);

module.exports = router;

