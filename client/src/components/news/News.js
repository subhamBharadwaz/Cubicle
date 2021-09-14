import React from "react";

// Import styled
import styled from "styled-components";

// Import components
import Headlines from "./Headlines";
import { useSelector } from "react-redux";
import Spinner from "../layout/Spinner";

const News = () => {
  const { loading } = useSelector((state) => state.news);
  return (
    <NewsStyle>
      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      <Content>
        <Headlines />
      </Content>
    </NewsStyle>
  );
};



const NewsStyle = styled.div`
  height: 100%;
  width: 100%;

  margin-left: 10rem;
  position: relative;

  @media (max-width: 48rem) {
    margin-left: 0.9rem;
    height: 180vh;
  }
`;

const Content = styled.div`
  padding: 7%;
  @media (max-width: 48rem) {
    padding: 7% 4%;
  }
`;
export default News;
