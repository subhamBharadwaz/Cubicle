import { topHeadings } from '../api/newsApi';
import axios from 'axios';

export const fetchTopHeadings = () => async (dispatch) => {
  const newHeadings = await axios.get(topHeadings());

  dispatch({
    type: 'FETCH_TOP_NEWS',
    payload: {
      topHeadlines: newHeadings.data,
    },
  });
};
