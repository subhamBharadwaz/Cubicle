import {faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
//  icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
// styles
import styled from "styled-components";

// Actions
import {completedTodo, deleteTodo} from "../../actions/todoAction";

const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    dispatch(deleteTodo(todo._id));
  };
  const [toogle, setToogle] = useState(todo.completed);
  const completeds = () => {
    toogle ? setToogle(false) : setToogle(true);
  };
  return (
    <TodoContainer>
      <TodoStyle>
        <div
          style={{
            textDecorationLine: toogle ? "line-through" : "none",
          }}
        >
          <li>{todo.text}</li>
          <button className="btn completed" onClick={completeds}>
            <FontAwesomeIcon icon={faCheck} className="icon completed" />
          </button>
        </div>
      </TodoStyle>

      <button className="btn delete-todo-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} className="icon todo-delete-icon" />
      </button>
      <Link to="/edit-todo">
        <button className="btn update-todo-btn">
          <FontAwesomeIcon icon={faEdit} className="icon todo-update-icon" />
        </button>
      </Link>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
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
  width: 100%;
  word-wrap: break-word;
  margin: 1.5rem;
  flex: 2;
  font-size: 1.5rem;
`;

export default Todo;
