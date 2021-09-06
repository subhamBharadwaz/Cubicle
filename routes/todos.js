const express = require("express");
const {
  getAllTodos,
  getAllCompletedTodos,
  getAllUncompletedTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todos");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.route("/me").get(protect, getAllTodos);
router.route("/me/completed").get(protect, getAllCompletedTodos);
router.route("/me/uncompleted").get(protect, getAllUncompletedTodos);
router.route("/").post(protect, createTodo);
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo);

module.exports = router;
