import React from "react";

export const TodoPagination = ({ todosPerPage, totalTodos }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumber.push(i);
  }
  return <div></div>;
};
