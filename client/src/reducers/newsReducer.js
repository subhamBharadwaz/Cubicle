const initState = {
  topHeadlines: { articles: [], source: {} },
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_NEWS':
      return { ...state, topHeadlines: action.payload.topHeadlines };
    default:
      return { ...state };
  }
};
export default newsReducer;
