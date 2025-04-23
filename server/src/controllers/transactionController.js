const Transaction = require('../models/Transaction');

// get All
exports.getAll = async (req, res) => {
  try {
    const filter = { user: req.user._id }; // Query filtering
    const { type } = req.query;
    const { page = 1, limit = 10 } = req.query; // pagination
    const skip = (page - 1) * limit;
    if (type) {
      if (type === 'income' || type === 'expense')
        filter.type = type;
      else return res.status(400).json({ message: 'Invalid transaction type. Valid values are "income" or "expense".' });
    }
    const transactions = await Transaction
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate('category');
    const total = await Transaction.countDocuments(filter);
    return res.status(200).json({ transactions, total, pages: Math.ceil(total / limit), currentPage: page });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

// get
exports.get = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ _id: req.params.id, user: req.user._id }).populate('category');
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transaction', error });
  }
};

// create new
exports.create = async (req, res) => {
  try {
    const { amount, type, date, category, description } = req.body;
    const newTransaction = await Transaction.create({
      user: req.user._id,
      amount,
      type,
      date,
      category,
      description
    });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: 'Error creating transaction', error });
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const updated = await Transaction.updateOne(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated || updated.modifiedCount === 0) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating transaction', error });
  }
};

// delete
exports.delete = async (req, res) => {
  try {
    const deleted = await Transaction.deleteOne({ _id: req.params.id, user: req.user._id });
    if (!deleted || deleted.deletedCount === 0) return res.status(404).json({ message: 'Transaction not found' });
    res.status(200).json({ message: 'Transaction deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction', error });
  }
};
