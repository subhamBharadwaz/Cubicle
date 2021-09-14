import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Style
import styled from "styled-components";

// Actions
import { getTodos } from "../../actions/todoAction";
import Spinner from "../layout/Spinner";

// Components
import Todo from "./Todo";

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
      <div className="btns">
        <button className="btn-1" onClick={prevTodosHandler}>
          Prev
        </button>

        <button className="btn-1" onClick={nextTodosHandler}>
          Next
        </button>
      </div>
    </TodoListStyle>
  );
};

const TodoListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .btns {
    display: flex;
    flex-direction: row;
  }
  .btn-1 {
    margin: 15px;
    padding: 0.6rem 1.8rem;

    background: linear-gradient(90deg, #88108a, #6711e7);

    border: none;
    border-radius: 25px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    justify-content: space-between;
  }
  @media (max-width: 48rem) {
    flex-direction: column;
    .btns {
      flex-direction: row;
      margin-bottom: 10px;
    }
  }
`;

export default TodoList;
