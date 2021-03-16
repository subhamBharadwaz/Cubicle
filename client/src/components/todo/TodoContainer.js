import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

// Style
import styled from 'styled-components';

const TodoContainer = () => {
  return (
    <Container>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default TodoContainer;
