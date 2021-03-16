import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopHeadings } from '../../actions/newsAction';

// Styling and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Headlines = () => {
  const { topHeadlines } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopHeadings());
  }, [dispatch]);
  return (
    <div>
      {topHeadlines.articles.map((data) => (
        <Articles>
          <Content>
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <h5>
              <a href={data.url} target='_blank' rel='noreferrer'>
                Read More...
              </a>
            </h5>
          </Content>
          <img src={data.urlToImage} alt={data.title} />
        </Articles>
      ))}
    </div>
  );
};

const Articles = styled(motion.div)`
  width: 80vw;
  height: 30vh;
  padding: 10px 20px;
  background-color: #f7f7f7;
  color: black;
  margin-top: 20px;
  position: relative;
  border-radius: 40px 0 40px 0;

  img {
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 40px 0 0 0;
  }
  a {
    text-decoration: none;
    color: #1a83ff;

    &:hover {
      color: rgba(26, 133, 255, 0.89);
    }
  }
  @media (max-width: 48rem) {
    width: 90vw;
    height: 25vh;
    padding: 5 10px;
    img {
      width: 30%;
      object-fit: cover;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40%;
  margin-top: 1rem;

  h2 {
    color: #000;
    font-size: 1.5rem;
  }
  h4,
  h5 {
    margin-top: 1%;
    font-size: 1rem;
    color: #383838;
  }
  @media (max-width: 48rem) {
    margin-top: 0.5rem;
    margin-left: 34%;
    h2 {
      font-size: 1rem;
    }
    h4,
    h5 {
      font-size: 0.9rem;
      margin-top: 0.6rem;
    }
  }
`;

export default Headlines;
