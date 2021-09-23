const initState = {
  todos: [],
  loading: true,
  error: {},
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case "GET_COMPLETED_TODOS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case "GET_UNCOMPLETED_TODOS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "ADD_COMPLETE":
      return {
        ...state,
        todos: state.todos.find((todo) => {
          return todo._id === action.payload;
        }),
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t._id === action.payload.id ? action.payload : t
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case "TODO_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default todoReducer;
