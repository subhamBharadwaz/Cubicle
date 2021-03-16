const express = require('express');
const {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} = require('../controller/expense');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/me').get(getAllExpenses);
router.route('/').post(createExpense);
router.route('/:id').put(updateExpense).delete(deleteExpense);

module.exports = router;
