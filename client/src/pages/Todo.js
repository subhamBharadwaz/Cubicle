import React, { useEffect } from 'react';
import TodoContainer from '../components/todo/TodoContainer';
import Header from '../components/todo/Header';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  return (
    <div>
      <Header />
      <TodoContainer />
    </div>
  );
};

export default Todo;
