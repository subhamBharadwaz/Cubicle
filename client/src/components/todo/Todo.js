import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { deleteTodo, addCompleteTodo } from "../../actions/todoAction";

// styles
import styled from "styled-components";

//  icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, updateHandler, setToggleSubmit }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    dispatch(deleteTodo(todo._id));
  };
  const [toggle, setToggle] = useState(todo.completed);

  const newToggle = toggle === null ? setToggle(true) : toggle;

  const completeTodoHandler = ({ updateHandler, setToggleSubmit }) => {
    dispatch(addCompleteTodo(todo._id, newToggle));
  };
  return (
    <TodoContainer>
      <TodoStyle>
        <div>
          <li>{todo.text}</li>
          <button className="btn completed">
            <FontAwesomeIcon
              icon={faCheck}
              className="icon completed"
              onClick={completeTodoHandler}
            />
          </button>
        </div>
      </TodoStyle>

      <button className="btn delete-todo-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} className="icon todo-delete-icon" />
      </button>
      <Link to="/edit-todo">
        <button className="btn update-todo-btn">
          <FontAwesomeIcon
            onClick={(e) => {
              e.preventDefault();
              updateHandler(todo._id);
              setToggleSubmit(true);
            }}
            icon={faEdit}
            className="icon todo-update-icon"
          />
        </button>
      </Link>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  button {
    border: none;
    background: none;
    outline: none;
  }
  .icon {
    font-size: 2rem;
    margin-right: 0.5rem;
    flex: 1;
    cursor: pointer;
  }
  .todo-delete-icon {
    color: rgb(245, 55, 55);
  }
  .todo-update-icon {
    color: #6928eb;
  }
`;
const TodoStyle = styled.div`
  list-style: none;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  padding: 16px;
  border-radius: 5px;
  width: 20%;
  height: 80%;

  word-wrap: break-word;
  margin: 1.5rem;
  flex: 2;
  font-size: 1.5rem;
`;

export default Todo;
