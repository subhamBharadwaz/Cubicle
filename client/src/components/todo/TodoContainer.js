import React, { useState } from "react";
// Components

import TodoList from "./TodoList";

import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
// Actions
import {
  addTodo,
  getTodos,
  getCompletedTodos,
  getUncompletedTodos,
  updateTodo,
} from "../../actions/todoAction";

//  icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";

// Style
import styled from "styled-components";

const TodoContainer = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todoList);

  const [text, setText] = useState("");
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(false);

  // Update
  const updateHandler = (id) => {
    let newEditItem = todos.find((el) => {
      return el._id === id;
    });

    setText(newEditItem.text);
    setIsEditItem(newEditItem._id);
  };

  // Filter
  const getAllTodoHandler = (e) => {
    e.preventDefault();
    dispatch(getTodos());
  };
  const getCompletedTodoHandler = (e) => {
    e.preventDefault();
    dispatch(getCompletedTodos());
  };
  const getUncompletedTodoHandler = (e) => {
    e.preventDefault();
    dispatch(getUncompletedTodos());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text,
    };
    dispatch(addTodo(newTodo));

    setText("");
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    const editedTodo = {
      text,
    };
    dispatch(updateTodo(isEditItem, editedTodo));

    setText("");
  };

  return (
    <Container>
      <FormStyle onSubmit={toggleSubmit ? updateTodoHandler : submitHandler}>
        <Select>
          <button onClick={getAllTodoHandler}>All</button>
          <button onClick={getCompletedTodoHandler}>Completed</button>
          <button onClick={getUncompletedTodoHandler}>Uncompleted</button>
        </Select>
        <div className="form-control">
          <InputStyle
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="enter text..."
          />
          <button className="btn add-todo-btn">
            <FontAwesomeIcon
              icon={toggleSubmit ? faEdit : faPlus}
              className="icon add-icon"
            />
          </button>{" "}
        </div>
      </FormStyle>
      <TodoList
        updateHandler={updateHandler}
        setToggleSubmit={setToggleSubmit}
        updateTodoHandler={updateTodoHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
  max-width: 1140px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const Select = styled.div`
  display: flex;
  gap: 3em;
  margin-right: 2em;

  button {
    color: #fff;
  }
  @media (max-width: 48rem) {
    flex-direction: column;

    button {
      gap: 2em;
    }
  }
`;

const FormStyle = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  width: 100%;
  .form-control {
    display: flex;
  }
  button {
    padding: 12px 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
  .add-icon {
    font-size: 2.3rem;
    color: #fff;
  }
  margin-bottom: 10vh;
`;

const InputStyle = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  color: #333;
  outline: none;
  width: 90%;
  font-size: 1.5rem;
  background: transparent;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #333;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
  }
`;

export default TodoContainer;
