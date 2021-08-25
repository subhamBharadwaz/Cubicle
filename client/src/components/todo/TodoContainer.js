import React from "react";
// Style
import styled from "styled-components";

// Components
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

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
  .add-todo {
  }
`;

export default TodoContainer;
