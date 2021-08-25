import React from 'react';
// Components
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 50px 300px;
  /* flex: 1; */
  .add-todo{
    
  }
`;

export default TodoContainer;
