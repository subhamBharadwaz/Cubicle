import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoAction';

//  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Style
import styled from 'styled-components';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text,
    };
    dispatch(addTodo(newTodo));

    setText('');
  };

  return (
    <>
      <FormStyle onSubmit={submitHandler}>
        <div className='form-control'>
          <InputStyle
            onChange={(e) => setText(e.target.value)}
            type='text'
            value={text}
            placeholder='enter text...'
          />
        </div>
        <button className='btn add-todo-btn'>
          <FontAwesomeIcon icon={faPlus} className='icon add-icon' />
        </button>
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
    padding: 6px 16px;
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
  outline: none;
  width: 320px;
  background: transparent;
`;

export default AddTodo;
