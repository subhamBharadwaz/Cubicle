import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import Todo from "./Todo";
import Spinner from "../layout/Spinner";
// Actions
import { getTodos } from "../../actions/todoAction";

// Style
import styled from "styled-components";

const TodoList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage, setTodoPerPage] = useState(5);

  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Get current todos
  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Next todos
  const nextTodosHandler = () => {
    if (todos.length > 0) {
      let totalTodos = todos.length;
      let totalPages = Math.ceil(totalTodos / todoPerPage);

      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(totalPages);
      }
    }
  };

  // Prev todos
  const prevTodosHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <TodoListStyle>
      <ul id="list" className="list">
        {loading && <Spinner />}
        {currentTodos.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
      <button onClick={prevTodosHandler}>Prev</button>

      <button onClick={nextTodosHandler}>Next</button>
    </TodoListStyle>
  );
};

const TodoListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TodoList;
