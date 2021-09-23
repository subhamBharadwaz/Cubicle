const initState = {
  transactions: [],
  loading: true,
  error: {},
};

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "UPDATE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.map((t) =>
          t._id === action.payload.id ? action.payload : t
        ),
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,

        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default expenseReducer;
