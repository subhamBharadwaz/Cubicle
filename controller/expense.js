const ErrorResponse = require('../utils/errorResponse');
const Expenses = require('../models/Expense');
const asyncHandler = require('../middleware/async');

// @desc    Get all expenses
// @route   GET /api/v1/expenses/user/:userId
// @access  Private

exports.getAllExpenses = asyncHandler(async (req, res, next) => {
  const expenses = await Expenses.find({
    user: req.user.id,
  }).populate('user', ['name']);

  if (!expenses) {
    return next(
      new ErrorResponse(`Expense not found with id ${req.user.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    count: expenses.length,
    data: expenses,
  });
});

// @desc    Create expense
// @route   POST /api/v1/expenses
// @access  Private

exports.createExpense = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const expense = await Expenses.create(req.body);
  res.status(201).json({ success: true, data: expense });
});

// @desc    Update expense
// @route   PUT /api/v1/expenses/:id
// @access  Private

exports.updateExpense = asyncHandler(async (req, res, next) => {
  let expense = await Expenses.findById(req.params.id);
  if (!expense) {
    return next(
      new ErrorResponse(
        `Expense not found with the id of ${req.params.id}`,
        404
      )
    );
  }

  // Make sure user is expense owner
  if (expense.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this expense`,
        404
      )
    );
  }

  expense = await Expenses.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(202).json({ success: true, data: expense });
});

// @desc    Delete expense
// @route   DELETE /api/v1/expense/:id
// @access  Private

exports.deleteExpense = asyncHandler(async (req, res, next) => {
  const expense = await Expenses.findById(req.params.id);
  if (!expense) {
    return next(
      new ErrorResponse(
        `Expense not found with the id of ${req.params.id}`,
        404
      )
    );
  }

  // Make sure user is expense owner
  if (expense.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this expense`,
        404
      )
    );
  }

  expense.remove();
  res.status(200).json({ success: true, data: {} });
});
