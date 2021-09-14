import React from "react";
import styled from "styled-components";
import Todo from "./Todo";

const TodoFilter = () => {
  return (
    <Select>
      <select name="todos" className="filter-todos">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Un-Completed</option>
      </select>
    </Select>
  );
};

const Select = styled.div`
  margin-right: 10px;

  select {
    padding: 20px 14px;
    border-color: #7b06fc;
    outline: none;

    border-radius: 4px;
    cursor: pointer;
  }
`;
export default TodoFilter;
