const initState = {
  topHeadlines: { articles: [], source: {} },
  loading: true,
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TOP_NEWS":
      return {
        ...state,
        topHeadlines: action.payload.topHeadlines,
        loading: false,
      };
    default:
      return { ...state };
  }
};
export default newsReducer;
