import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Todo';
import Spinner from '../layout/Spinner';
import { getTodos } from '../../actions/todoAction';

// Style
import styled from 'styled-components';

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);
  const { todos, loading } = useSelector((state) => state.todoList);

  return (
    <TodoListStyle>
      <ul id='list' className='list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </TodoListStyle>
  );
};

const TodoListStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TodoList;
