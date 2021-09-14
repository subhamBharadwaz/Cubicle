import axios from "axios";

// Get the current user's todos
export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/todos/me");
    dispatch({
      type : "GET_TODOS",
      payload : res.data.data,
    });
  } catch (err) {
    dispatch({
      type : "TODO_ERROR",
      payload : err.response.data.error,
    });
  }
};

// Add Todo

export const addTodo = (todo) => async (dispatch) => {
  const config = {
    headers : {
      "Content-Type" : "application/json",
    },
  };
  try {
    const res = await axios.post("/api/v1/todos", todo, config);
    dispatch({
      type : "ADD_TODO",
      payload : res.data.data,
    });
  } catch (err) {
    dispatch({
      type : "TODO_ERROR",
      payload : err.response.data.error,
    });
  }
};

// Delete todo
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/todos/${id}`);

    dispatch({
      type : "DELETE_TODO",
      payload : id,
    });
  } catch (err) {
    dispatch({
      type : "TODO_ERROR",
      payload : err.response.data.error,
    });
  }
};

export const completedTodo = (id) => async (dispatch) => {
  try {
    await axios.get("/api/v1/todos/me/completed");
    dispatch({
      type : "TOOGLE_TODO",
      payload : id,
    });
  } catch (err) {
    dispatch({
      type : "TODO_ERROR",
      payload : err.response.data.error,
    });
  }
};
