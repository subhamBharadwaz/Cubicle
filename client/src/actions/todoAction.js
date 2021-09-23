import axios from "axios";

// Get the current user's todos
export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/todos/me");
    dispatch({
      type: "GET_TODOS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Get the current user's completed todos
export const getCompletedTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/todos/me/completed");
    dispatch({
      type: "GET_COMPLETED_TODOS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Get the current user's completed todos
export const getUncompletedTodos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/todos/me/uncompleted");
    dispatch({
      type: "GET_UNCOMPLETED_TODOS",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Add Todo

export const addTodo = (todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/v1/todos", todo, config);
    dispatch({
      type: "ADD_TODO",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Add Complete

export const addCompleteTodo = (id, todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.put(`/api/v1/todos/${id}/iscompleted`, todo, config);

    dispatch({
      type: "ADD_COMPLETE",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Delete todo
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/todos/${id}`);

    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};

// Update Todo
export const updateTodo = (id, todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/v1/todos/${id}`, todo, config);
    dispatch({
      type: "UPDATE_TODO",
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: "TODO_ERROR",
      payload: err.response.data.error,
    });
  }
};
