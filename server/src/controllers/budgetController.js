const Budget = require('../models/Budget');

// Create a new budget
exports.create = async (req, res) => {
  try {
    const { category, amount, month } = req.body;
    const newBudget = await Budget.create({
      user: req.user._id,
      category,
      amount,
      month
    })
    return res.status(201).json(newBudget);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating budget', error });
  }

}

// Delete a budget by id
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Budget.deleteOne({
      _id: id
    })
    if (!deleted || deleted.deletedCount === 0) return res.status(404).json({ message: 'Budget not found' });
    return res.status(200).json({ message: 'Budget deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting budget', error });
  }
}

// Update a budget by id
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.body;
    const updated = await Budget.updateOne({
      _id: id
    }, {
      $set: { amount: amount }
    })
    if (!updated || updated.modifiedCount === 0) return res.status(404).json({ message: 'Budget not found' });
    const updatedBudget = await Budget.findById(id).populate('category');
    return res.status(200).json(updatedBudget);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating budget', error });
  }
}

// Get a budget by id
exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const getBudget = await Budget.findById(id).populate('category');
    if (!getBudget) return res.status(404).json({ message: 'Budget not found' });
    return res.status(200).json(getBudget);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching budget', error });
  }
}

// Get all budget 
exports.getAll = async (req, res) => {
  try {
    const getAllBudget = await Budget.find({ user: req.user._id }).populate('category');
    if (!getAllBudget) return res.status(404).json({ message: 'Budget not found' });
    return res.status(200).json(getAllBudget);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching all budget', error });
  }
}