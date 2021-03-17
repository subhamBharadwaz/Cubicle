import React, { useEffect } from 'react';
// Components
import TodoContainer from '../components/todo/TodoContainer';
import Header from '../components/todo/Header';

const Todo = () => {
  return (
    <div>
      <Header />
      <TodoContainer />
    </div>
  );
};

export default Todo;
