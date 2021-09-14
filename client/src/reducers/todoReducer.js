const initState = {
  todos : [],
  loading : true,
  error : {},
  completed : Boolean,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
  case "GET_TODOS":
    return {
      ...state,
      todos : action.payload,
      loading : false,
    };
  case "ADD_TODO":
    return {
      ...state,
      todos : [...state.todos, action.payload ],
    };

  case "DELETE_TODO":
    return {
      ...state,
      todos : state.todos.filter((todo) => todo._id !== action.payload),
    };
  case "TODO_ERROR":
    return {
      ...state,
      error : action.payload,
      loading : false,
    };

  default:
    return state;
  }
};
export default todoReducer;
