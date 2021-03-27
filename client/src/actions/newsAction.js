import { topHeadings } from "../api/newsApi";
import axios from "axios";

export const fetchTopHeadings = () => async (dispatch) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  };
  const newHeadings = await axios.get(topHeadings(), config);

  dispatch({
    type: "FETCH_TOP_NEWS",
    payload: {
      topHeadlines: newHeadings.data,
    },
  });
};
