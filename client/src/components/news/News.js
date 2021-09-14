import React from "react";
import { useSelector } from "react-redux";
// Import styled
import styled from "styled-components";

import Spinner from "../layout/Spinner";

// Import components
import Headlines from "./Headlines";

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
