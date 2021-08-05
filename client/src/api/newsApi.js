//  to prevent the cors error for sometime use "https://cors-anywhere.herokuapp.com/" OR
//  https://cors.bridged.cc/
const base_url = 'https://cors.bridged.cc/https://newsapi.org/v2/'
const appid = `apiKey=${process.env.REACT_APP_NEWS_API}`

// Top headings endpoint
export const topHeadings = () =>
  `${base_url}top-headlines?sources=bbc-news&${appid}&pageSize=5`

export const searchHeadings = (news_search) =>
  `${base_url}top-headlines?q=${news_search}&${appid}&pageSize=5`
