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
  max-width: 100%;
  padding: 4em 0;
  position: relative;

  @media (max-width: 48rem) {
  }
`;

const Content = styled.div`
  padding: 7%;
  @media (max-width: 48rem) {
    padding: 7% 4%;
  }
`;
export default News;
