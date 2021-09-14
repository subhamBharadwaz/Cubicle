import React from "react";
// Components
import TodoContainer from "../components/todo/TodoContainer";
import Header from "../components/todo/Header";

// Style
import styled from "styled-components";

const Todo = () => {
  return (
    <TodoStyle>
      <div className="greeting">
        <Header />
      </div>
      <div className="list">
        <TodoContainer />
      </div>
    </TodoStyle>
  );
};

const TodoStyle = styled.div`
  color: #333;
  min-height: 100vh;
  .greeting {
    margin-top: 5vh;
    margin-left: 15vh;
  }
  .list {
    z-index: 10;
  }
`;

export default Todo;
