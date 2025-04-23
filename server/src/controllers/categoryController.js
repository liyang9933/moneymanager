const Category = require('../models/Category');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget')

// Create a new category
exports.create = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create(
      {
        user: req.user._id,
        name: name
      }
    )
    return res.status(201).json(newCategory);
  } catch (error) {
    // console.log('req.user:', req.user);
    return res.status(400).json({ message: 'Error creating category', error });
  }
}

// Delete a category with id
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const transactionCount = await Transaction.countDocuments({ category: id });
    const budgetCount = await Budget.countDocuments({ category: id });

    if (transactionCount > 0 || budgetCount > 0) {
      return res.status(400).json({ message: 'Cannot delete category that is in use by transactions or budgets' });
    }
    const deleted = await Category.deleteOne({
      _id: id
    })
    if (!deleted || deleted.deletedCount === 0) return res.status(404).json({ message: 'Category not found' });
    return res.status(200).json({ message: 'Category deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting category', error });
  }
}

// Update a category by id
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updated = await Category.updateOne({
      _id: id
    }, {
      name: name
    })
    if (!updated || updated.modifiedCount === 0) return res.status(404).json({ message: 'Category not found' });
    const updatedCategory = await Category.findById(id);
    return res.status(200).json(updatedCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating category', error });
  }
}

// Get category by id
exports.get = async (req, res) => {
  try {
    const { id } = req.params;
    const getCategory = await Category.findById(id);
    if (!getCategory) return res.status(404).json({ message: 'Category not found' });
    return res.status(200).json(getCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching a category', error });
  }
}

// Get all category
exports.getAll = async (req, res) => {
  try {
    const getAllCategory = await Category.find({ user: req.user._id });
    if (!getAllCategory) return res.status(404).json({ message: 'Categories not found' });
    return res.status(200).json(getAllCategory);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching all categories', error });
  }
}