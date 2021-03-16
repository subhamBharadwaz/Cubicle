const TodoSchema = require('../models/Todo');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Todo = require('../models/Todo');
const auth = require('../middleware/auth');
// @desc    Get all todos
// @route   GET /api/v1/todos/me
// @access  Private

exports.getAllTodos = asyncHandler(async (req, res, next) => {
  const todos = await TodoSchema.find({
    user: req.user.id,
  }).populate('user', ['name']);

  if (!todos) {
    return next(
      new ErrorResponse(`Todo not found with id ${req.user.id}`, 400)
    );
  }

  res.status(200).json({
    success: true,
    count: todos.length,
    data: todos,
  });
});

// @desc    Create single todo
// @route   POST /api/v1/todos
// @access  Private

exports.createTodo = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const todo = await TodoSchema.create(req.body);
  res.status(201).json({ success: true, data: todo });
});

// @desc    Update single todo
// @route   PUT /api/v1/todo/:id
// @access  Private

exports.updateTodo = asyncHandler(async (req, res, next) => {
  let todo = await TodoSchema.findById(req.params.id);
  if (!todo) {
    return next(
      new ErrorResponse(`Todo not found with id ${req.params.id}`, 400)
    );
  }

  // Make sure user is todo owner
  if (todo.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this todo`,
        404
      )
    );
  }

  todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: todo });
});

// @desc    Delete single todo
// @route   DELETE /api/v1/todos/:id
// @access  Private

exports.deleteTodo = asyncHandler(async (req, res, next) => {
  const todo = await TodoSchema.findById(req.params.id);
  if (!todo) {
    return next(
      new ErrorResponse(`Todo not found with id ${req.params.id}`, 400)
    );
  }

  // Make sure user is todo owner
  if (todo.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this todo`,
        404
      )
    );
  }

  todo.remove();
  res.status(200).json({ success: true, data: {} });
});
