// to prevent the cors error for sometime use "https://cors-anywhere.herokuapp.com/"
const base_url = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/';
const appid = `apiKey=${process.env.REACT_APP_NEWS_API}`;

// Top headings endpoint
export const topHeadings = () =>
  `${base_url}top-headlines?sources=bbc-news&${appid}&pageSize=10`;

export const searchHeadings = (news_search) =>
  `${base_url}top-headlines?q=${news_search}&${appid}&pageSize=10`;
