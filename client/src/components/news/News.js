import React from 'react';

// Import styled
import styled from 'styled-components';

// Import components
import Headlines from './Headlines';

const News = () => {
  return (
    <NewsStyle>
      <Content>
        <Headlines />
      </Content>
    </NewsStyle>
  );
};

const NewsStyle = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  padding: 7%;
  @media (max-width: 48rem) {
    padding: 7% 4%;
  }
`;

export default News;
