import { faPlus } from "@fortawesome/free-solid-svg-icons";
//  icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Style
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

// Actions
import { addTodo } from "../../actions/todoAction";

// filter
import TodoFilter from "./TodoFilter";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text,
    };
    dispatch(addTodo(newTodo));

    setText("");
  };

  return (
    <>
      <FormStyle>
        <TodoFilter />
        <div className="form-control">
          <InputStyle
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="enter text..."
          />
        </div>
        <button onClick={submitHandler} className="btn add-todo-btn">
          <FontAwesomeIcon icon={faPlus} className="icon add-icon" />
        </button>{" "}
      </FormStyle>
    </>
  );
};

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

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
  width: 320px;
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

export default AddTodo;
