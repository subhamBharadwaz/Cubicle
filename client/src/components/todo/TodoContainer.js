import React from "react";
// Components
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
// import TodoFilter from "./TodoFilter";

// Style
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <Container>
      <AddTodo />
      <TodoList />
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

export default TodoContainer;
